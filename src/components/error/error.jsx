import './error.css'


const Error = (props) => {


    return (
        <div className="error">
            <p>id: {props.props.id}.</p>
            <br />
            <p> Дата: {props.props.date}</p>
            <br/>
            <p>Текст ошибки: {props.props.info}</p>

        </div>
    )
}

export default Error