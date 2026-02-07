
import { SubCompany } from './SubCompany.jsx'

export function Company(props) {
    return <SubCompany name={props.name} revenue={props.revenue} />;
}