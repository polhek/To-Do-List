import "./styles/style.css";
import { toggleChevron } from "./views/chevronItemToggle";
const chevronItem = document.getElementById("chevron");

chevronItem.addEventListener("click", toggleChevron);
