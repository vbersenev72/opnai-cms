import './request_key.css'

const RequestKey = (props) => {




	return (
		<div className="request_key">
			<h3>id: {props.props.id}</h3>
			<br/>
			<h4>Текст запроса: </h4><p>"{props.props.data}"</p>
			<br/>
			<h4>Дата запроса: </h4><p>"{props.props.date}"</p>
			<br/>
			<h4>ID пользователя: </h4><p>"{props.props.user_id}"</p>
			<br/>
			<h4>Время генерации: </h4><p>"{props.props.time}"</p>
			<br/>
			<h4>Модель: </h4><p>"{props.props.model}"</p>
			<br/>
			<h4>Платформа: </h4><p>"{props.props.platform}"</p>
			<br/>
			<h4>Версия: </h4><p>"{props.props.version}"</p>
			<br/>
			<h4>Подписан: </h4><p>"{props.props.is_subscribe ? "Да" : "Нет"}"</p>
			<br/>
			<h4>Ответ: </h4><p>"{props.props.response}"</p>
		</div>
		)
}

export default RequestKey;