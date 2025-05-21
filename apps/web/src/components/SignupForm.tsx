import { useForm, type AnyFieldApi } from "@tanstack/react-form";
import { z } from "zod";
import Input from "./core/input";
import Button from "./core/button";
import { useMutation } from "@tanstack/react-query";
import { rpc } from "../libs/rpc";

const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(2),
  password: z.string().min(4),
});

type SignupSchema = z.infer<typeof signupSchema>;

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <p className="text-xs text-red-500">
          {field.state.meta.errors.map(err => err.message).join(", ")}
        </p>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
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
      mutate(value);
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ email, name, password }: SignupSchema) => {
      await rpc.api.auth.signup.$post({
        json: { email, name, password },
      });
      form.reset();
    },
  });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="flex flex-col gap-3 max-w-sm mx-auto w-full"
    >
      <form.Field
        name="name"
        children={field => {
          return (
            <div className="flex flex-col gap-1">
              <label htmlFor={field.name}>Fullname</label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </div>
          );
        }}
      />
      <form.Field
        name="email"
        children={field => {
          return (
            <div className="flex flex-col gap-1">
              <label htmlFor={field.name}>Email</label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </div>
          );
        }}
      />
      <form.Field
        name="password"
        children={field => {
          return (
            <div className="flex flex-col gap-1">
              <label htmlFor={field.name}>Password</label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </div>
          );
        }}
      />
      <form.Subscribe
        selector={state => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button
            type="submit"
            disabled={!canSubmit || isSubmitting || isPending}
          >
            Signup
          </Button>
        )}
      ></form.Subscribe>
    </form>
  );
}
