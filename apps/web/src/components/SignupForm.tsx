import { useForm, type AnyFieldApi } from "@tanstack/react-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { rpc } from "../libs/rpc";
import { Button, Input } from "@medium/design/components";

const signupSchema = z.object({
  email: z.string().email("Must be a valid email"),
  password: z.string().min(8, "Minimun 8 character"),
  name: z
    .string({ required_error: "Name is required" })
    .min(2, "Minimun 2 characters"),
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
      mutateAsync(value)
        .then(() => {})
        .catch(err => console.log(err));
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
    onError: error => {
      console.log(error.message);
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
                type="password"
                autoComplete="off"
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
