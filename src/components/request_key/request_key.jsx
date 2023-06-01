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
			<h4>Ответ: </h4><p>"{props.props.response}"</p>
		</div>
		)
}

export default RequestKey;