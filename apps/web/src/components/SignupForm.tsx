import { useForm, type AnyFieldApi } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { rpc } from "../libs/rpc";
import { Button, Input } from "@medium/design/components";
import { type SignupSchema, signupSchema } from "@medium/validators";

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

export default function SignupForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    } as SignupSchema,
    validators: {
      onChange: signupSchema,
    },
    onSubmit: async ({ value }) => {
      await mutateAsync(value);
    },
  });

  const { mutateAsync, isPending } = useMutation({
    retry: false,
    mutationFn: async ({ email, name, password }: SignupSchema) => {
      const res = await rpc.api.auth.signup.$post({
        json: { email, name, password },
      });
      const data = await res.json();
      return data;
    },
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
              <label htmlFor={field.name} className="text-sm">
                Full Name
              </label>
              <Input
                id={field.name}
                name={field.name}
                autoComplete="off"
                value={field.state.value}
                placeholder="Jane Doe"
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
              <label htmlFor={field.name} className="text-sm">
                Email
              </label>
              <Input
                id={field.name}
                name={field.name}
                autoComplete="off"
                value={field.state.value}
                placeholder="janedoe@example.com"
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </div>
          );
        }}
      />
      <form.Field
        name="password"
        children={(field) => {
          return (
            <div className="flex flex-col gap-1">
              <label htmlFor={field.name} className="text-sm">
                Password
              </label>
              <Input
                type="password"
                autoComplete="off"
                id={field.name}
                name={field.name}
                value={field.state.value}
                placeholder="********"
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </div>
          );
        }}
      />
      <div className="mt-4 flex w-full">
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button
              variant="dark"
              type="submit"
              size="lg"
              width="full"
              disabled={!canSubmit || isSubmitting || isPending}
            >
              Get started
            </Button>
          )}
        ></form.Subscribe>
      </div>
    </form>
  );
}
