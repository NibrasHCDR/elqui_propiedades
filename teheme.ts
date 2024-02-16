import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#fff",
    "--my-black": "#000000",
    "--sitewizard-brand": "#385AE0",
    "--my-red": "#FF0000",
    "--my-yellow": "#FFFF00",
    "--my-green": "#00FF00",

}

export const myTheme = buildLegacyTheme({
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--brand-primary": props["--sitewizard-brand"],

    "--default-button-primary-color": props["--my-yellow"],

    "--state-info-color": props["--sitewizard-brand"],


    "--focus-color": props["--sitewizard-brand"]

})