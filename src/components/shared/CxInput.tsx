import { Field } from 'formik'


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon:string;
  label:string;
  name:string;
  type?:string;
  placeholder:string;
}


export const CxInput = ({
    label,
    name,
    type="text",
    placeholder,
    icon,
    ...props
}: InputProps) => {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <div className="input-group mb-3 bg-light-subtle rounded-3">
                {icon && (
                    <span
                        className="input-group-text text-muted"
                        id="basic-addon3"
                    >
                        <i className={icon} />
                    </span>
                )}
                <Field
                   className="form-control form-control-lg bg-light-subtle border-light"
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    {...props}
                />
            </div>
        </div>
    )
}
