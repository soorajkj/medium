import { Button, Input } from "@medium/design/components";
import { signupSchema, type SignupSchema } from "@medium/validators";
import { useForm, type AnyFieldApi } from "@tanstack/react-form";

function FieldInfo({ field }: { field: AnyFieldApi }) {
  const isTouched = field.state.meta.isTouched;
  const isValid = field.state.meta.isValid;
  const isValidating = field.state.meta.isValidating;

  return (
    <>
      {isTouched && !isValid ? (
        <div className="flex flex-col gap-1">
          {field.state.meta.errors.map((err) => (
            <p key={err.message} className="text-xs text-red-500 leading-tight">
              {err.message}
            </p>
          ))}
        </div>
      ) : null}
      {isValidating ? "Validating..." : null}
    </>
  );
}

export default function PublishBlogForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    } as SignupSchema,
    validators: {
      onChange: signupSchema,
    },
    onSubmit: async () => {},
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="flex flex-col gap-3 max-w-sm mx-auto w-full"
    >
      <form.Field
        name="name"
        children={(field) => {
          return (
            <div className="flex flex-col gap-1">
              <label htmlFor={field.name}>Title</label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                placeholder="Write a preview title"
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </div>
          );
        }}
      />
      <form.Field
        name="email"
        children={(field) => {
          return (
            <div className="flex flex-col gap-1">
              <label htmlFor={field.name}>Description</label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                placeholder="Write a preview description"
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </div>
          );
        }}
      />
      <div className="relative">
        <p className="text-sm text-neutral-500">
          <strong>Note:</strong> Changes here will affect how your story appears
          in public places like Medium’s homepage and in subscribers’ inboxes —
          not the contents of the story itself.
        </p>
      </div>

      <div className="mt-4 flex w-full">
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button
              type="submit"
              variant="green"
              size="md"
              width="full"
              disabled={!canSubmit || isSubmitting}
            >
              Publish
            </Button>
          )}
        ></form.Subscribe>
      </div>
    </form>
  );
}
