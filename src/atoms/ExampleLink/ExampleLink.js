import React from "react";

import { Link } from "react-router-dom";

const ExampleLink = ({ href, value }) => <Link to={href}>{value}</Link>;

export default ExampleLink;
