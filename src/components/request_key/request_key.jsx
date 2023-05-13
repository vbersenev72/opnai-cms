import './request_key.css'

const RequestKey = (props) => {




	return (
		<div className="request_key">
			<h3>id: {props.props.request}</h3>
			<br/>
			<h4>Текст запроса: </h4><p>"{props.props.data}"</p>
			<br/>
			<h4>Дата запроса: </h4><p>"{props.props.date}"</p>
			<br/>
		</div>
		)
}

export default RequestKey;