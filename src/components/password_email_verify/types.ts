export type PasswordEmailVerifyPageProps = {
  searchParams: Promise<{ email?: string }>;
};

export type PasswordEmailVerifyFormProps = {
  email: string | null;
};
