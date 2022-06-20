const TransactionItem = ({
  t_id,
  t_name,
  t_wording,
  t_balance,
  c_name,
  s_name,
  t_created_at,
}) => {
  const date = new Date(t_created_at);
  return (
    <tr>
      <th scope="row">{t_id}</th>
      <td>{t_name}</td>
      <td>{t_wording}</td>
      <td>{t_balance}</td>
      <td>{c_name}</td>
      <td>{s_name}</td>
      <td>{date.toLocaleDateString('fr')}</td>
      <td className="text-end">
        <a
          href="<?= $router->generate('product-edit-id', ['id' => $value -> getId()]) ?>"
          className="btn btn-sm btn-warning"
        >
          <i className="fa fa-pencil-square-o" aria-hidden="true" />
        </a>

        <div className="btn-group">
          <button
            type="button"
            className="btn btn-sm btn-danger dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa fa-trash-o" aria-hidden="true" />
          </button>
          <div className="dropdown-menu">
            <a
              className="dropdown-item"
              href="<?= $router->generate('product-delete', ['id' => $value->getId()]) ?>?token=<?= $token ?>"
            >
              Oui, je veux supprimer
            </a>
            <a className="dropdown-item" href="#" data-toggle="dropdown">
              Oups !
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TransactionItem;
