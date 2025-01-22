import { 
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
 } from "@react-router/dev/routes";

export default [
    index("components/Top/self-produce-page.tsx"),
    route("/carrer", "./components/carrer/carrer-page.tsx"),
    route("/skill", "./components/skill/skill-page.tsx"),
    //route("/modal_test", "./components/organisms/modal.tsx"),
] satisfies RouteConfig;
