export default function Alert({ alert }) {
  if (!alert) return null;

  return (
    <div>
      <div className={`alert alert-${alert.type}`} role="alert">
        {alert.msg}
      </div>
    </div>
  )
}
