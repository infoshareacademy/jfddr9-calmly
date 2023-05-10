export const Form = ({ submitText, onSubmit }: any) => (
  <form onSubmit={onSubmit}>
    <div>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
    </div>
    <button>{submitText}</button>
  </form>
);

export const getFormData = (event): any => {
  const form = event.target;
  const { email, password } = form;

  const formData = {
    email: email.value,
    password: password.value,
  };

  return formData;
};
