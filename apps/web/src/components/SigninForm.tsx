import { useForm, type AnyFieldApi } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { rpc } from "../libs/rpc";
import { z } from "zod";
import { Button, Input } from "@medium/design/components";

const signinSchema = z.object({
  email: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

type SigninSchema = z.infer<typeof signinSchema>;

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <p className="text-xs text-red-500">
          {field.state.meta.errors.map((err) => err.message).join(", ")}
        </p>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}

export default function SigninForm() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    } as SigninSchema,
    validators: {
      onChange: signinSchema,
    },
    onSubmit: async ({ value }) => {
      await mutateAsync(value);
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: async ({ email, password }: SigninSchema) => {
      const response = await rpc.api.auth.signin.$post({
        json: { email, password },
      });
      if (!response.ok) throw new Error("Something went wrong");
      return await response.json();
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="flex flex-col gap-3 max-w-sm mx-auto w-full"
    >
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
                id={field.name}
                type="password"
                name={field.name}
                autoComplete="off"
                value={field.state.value}
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
              type="submit"
              variant="dark"
              disabled={!canSubmit || isSubmitting}
              size="lg"
              width="full"
            >
              Signin
            </Button>
          )}
        ></form.Subscribe>
      </div>
    </form>
  );
}
