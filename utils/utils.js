import { v4 as uuidv4 } from "uuid";

export const namespaced = (namespace, asset) => `${namespace}/${asset}`;

export const buildParams = (params) => {
  const keys = Object.keys(params);
  if (keys.length == 0) return "";
  return (
    "?" +
    keys
      .map((key) => {
        return `${key}=${params[key]}`;
      })
      .join("&")
  );
};

export const makeid = () => {
  return uuidv4();
};

export const deepCopy = (params) => {
  return JSON.parse(JSON.stringify(params));
};

export const modifyHtmlPath = (urlPath) => {
  var u = new URL(urlPath);
  return u.pathname;
};

export const convertBoolean = (val) => {
  if (val == true) {
    return "Yes";
  } else {
    return "No";
  }
};

export const sidemenus = [
  {
    name: "Dashboard",
    link: "/",
    icon: "bi bi-speedometer2",
  },
  {
    name: "Marketing Tools",
    link: "/marketing-tools",
    icon: "bi bi-megaphone",
  },
  {
    name: "Default Links",
    link: "/default-links",
    icon: "bi bi-link-45deg",
  },
  {
    name: "Reports",
    link: "/reports",
    icon: "bi bi-graph-up",
    submenus: [
      {
        name: "Media Report",
        link: "/reports/media",
        icon: "",
      },
      {
        name: "Registration Report",
        link: "/reports/registration",
        icon: "",
      },
    ],
  },
  {
    name: "Earnings",
    link: "/earnings",
    icon: "bi bi-cash-coin",
  },
  {
    name: "Sub Affiliates",
    link: "/subaffiliates",
    icon: "bi bi-people",
  },
  {
    name: "Account Details",
    link: "/accounts",
    icon: "bi bi-person",
    submenus: [
      {
        name: "Personal Info",
        link: "/accounts/personal-info",
        icon: "",
      },
      {
        name: "Change Password",
        link: "/accounts/change-password",
        icon: "",
      },
      {
        name: "Document Upload",
        link: "/accounts/document-upload",
        icon: "",
      },
      {
        name: "Payment Details",
        link: "/accounts/payment-details",
        icon: "",
      },
      {
        name: "Withdraws",
        link: "/accounts/withdraws",
        icon: "",
      },
      {
        name: "Sign Out",
        link: "/accounts/signout",
        icon: "",
      },
    ],
  },
  {
    name: "Tutorials",
    link: "/tutorials",
    icon: "bi bi-file-play-fill",
  },
  {
    name: "Support",
    link: "/support",
    icon: "bi bi-headphones",
  },
];
