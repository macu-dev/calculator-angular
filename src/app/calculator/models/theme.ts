export interface Theme {
  name: string;
  properties: any;
}

export const dark: Theme = {
  name: "dark",
  properties: {
    "--main-background-dark": "hsl(222, 26%, 31%)",
    "--toggle-background-dark": "hsl(223, 31%, 20%)",
    "--screen-background-dark": "hsl(224, 36%, 15%)",
    "--key-operations-dark": "hsl(225, 21%, 49%)",
    "--key-operations-shadow-dark": "hsl(224, 28%, 35%)",
    "--key-background-dark": "hsl(6, 63%, 50%)",
    "--key-shadow-dark": "hsl(6, 70%, 34%)",
    "--key-numbers-background-dark": "hsl(30, 25%, 89%)",
    "--key-numbers-shadow": "hsl(28, 16%, 65%)",
    "--text-dark": "hsl(221, 14%, 31%)",
    "--text-white-dark": "hsl(0, 0, 100%)",
    "--text-color-light": "#fff",
    "--key-equal" : "#fff"
  }
};

export const light: Theme = {
  name: "light",
  properties: {
    "--main-background-dark": "hsl(0, 0%, 90%)",
    "--toggle-background-dark": "hsl(0, 5%, 81%)",
    "--screen-background-dark": "hsl(0, 0%, 93%)",
    "--key-operations-dark": "hsl(185, 42%, 37%)",
    "--key-operations-shadow-dark": "hsl(185, 58%, 25%)",
    "--key-background-dark": "hsl(25, 98%, 40%)",
    "--key-shadow-dark": "hsl(25, 99%, 27%)",
    "--key-numbers-background-dark": "hsl(45, 7%, 89%)",
    "--key-numbers-shadow": "hsl(35, 11%, 61%)",
    "--text-dark": "hsl(60, 10%, 19%)",
    "--text-white-dark": "hsl(0, 0, 100%)",
    "--text-color-light": "hsl(60, 10%, 19%)",
    "--key-equal" : "#fff"
  }
};

export const purple: Theme = {
  name: "purple",
  properties: {
    "--main-background-dark": "hsl(268, 75%, 9%)",
    "--toggle-background-dark": "hsl(268, 71%, 12%)",
    "--screen-background-dark": "hsl(268, 71%, 12%)",
    "--key-operations-dark": "hsl(268, 71%, 12%)",
    "--key-operations-shadow-dark": "hsl(285, 91%, 52%)",
    "--key-background-dark": "hsl(177, 92%, 70%)",
    "--key-shadow-dark": "#fff",
    "--key-numbers-background-dark": "hsl(268, 47%, 21%)",
    "--key-numbers-shadow": "hsl(285, 91%, 52%)",
    "--text-dark": "hsl(52, 100%, 62%)",
    "--text-white-dark": "hsl(0, 0, 100%)",
    "--text-color-light": "hsl(52, 100%, 62%)",
    "--key-equal" : "hsl(268, 71%, 12%)"
  }
};
