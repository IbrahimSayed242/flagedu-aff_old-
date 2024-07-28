export default function ({ store, redirect, route }) {
  const currentRoute = route.name;
  const token = store.getters["user/getToken"];

  const authRouteName = [
    "index",
    "accounts-change-password",
    "accounts-payment-details",
    "accounts-personal-info",
    "earnings",
    "marketing-tools",
    "reports-media",
    "reports-registration",
  ];

  const match = authRouteName.includes(currentRoute);

  if (match === true) {
    if (token === null) {
      return redirect("/signin");
    }
  }
}
