import { useNavigate } from "react-router-dom";

export function ButtonPrimary({
  id,
  content,
  className,
  style,
  icon,
  rota = "/contato",
  disabled = false,
}) {

  const navigate = useNavigate();

  return (
    <a
      href="javascript:void(0);"
      tabIndex={0}
      id={id}
      type="button"
      style={{ style }}
      className={`${className}`}
      onClick={() => navigate(rota)}
      disabled={disabled}
    >
      <div className="d-flex gap-2 text-white">
        {content}
        {icon}
      </div>
    </a>
  );
}
