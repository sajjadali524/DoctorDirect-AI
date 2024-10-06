import { Link } from "react-router-dom";
import ProtoTypes from "prop-types";

export const PrimaryButton = ({text, path}) => {
    return <Link to={path} className="text-center bg-darkBlue font-[600] text-[18px] px-7 py-3 rounded-md hover:bg-slate-800 transition-all text-white">{text}</Link>
};
PrimaryButton.propTypes = {
    text: ProtoTypes.node,
    path: ProtoTypes.node
};