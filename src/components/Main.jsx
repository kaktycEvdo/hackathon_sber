import Modal from './UI/Modal/Modal'
import { Component } from 'react';

class Main extends Component {
    state = { opened: false }

    data = [
        {'ФИО': 'Фамилич'+' '+'Имён'+' '+'Отчествович', 'dtype' : 'text'},
        {'Дата рождения': '25.11.1999', 'dtype' : 'date'},
        {'Серия № паспорта': '2555 251444', 'dtype' : 'date'},
        {'Адрес регистрации': 'Россия г. Новосибирск ул. Коммунистическая д. 32', 'dtype' : 'text'},
        {'Адрес проживания': 'Россия г. Новосибирск ул. Коммунистическая д. 32', 'dtype' : 'text'},
        {'Семейное положение': 'Холост', 'dtype' : 'text'},
        {'Наличие детей': 0, 'dtype' : 'number'},
        {'Должность': 'Работник общественного питания', 'dtype' : 'text'},
        {'Ежемесячный доход по месту работы': 23000, 'dtype' : 'number'},
        {'Документ, подтверждающий доход': 'типа документ ага', 'dtype' : 'file'},
        {'Ежемесячный дополнительный доход': 0, 'dtype' : 'text'},
        {'Документ, подтверждающий дополнительный доход': 'типа его нет ага', 'dtype' : 'file'},
        {'Место работы': 'Вкусно - и Точка!', 'dtype' : 'text'},
        {'Стаж работы': 3, 'dtype' : 'number'},
        {'Источник доп. дохода': 'Нет', 'dtype' : 'text'},
        {'Наличие сбережений на счёте в банке': 'Нет', 'dtype' : 'text'}
    ]
    
    render() { 
        return (
            <>
                <Modal opened={this.state.opened} close={() => this.setState({opened: false})}>a</Modal>
                
                <div className='main_form'>
                    <div className='form_logo'>{this.props.logo}</div>
                    {this.data.map((object, index) => {
                        return <div key={index}>
                                    <label className={object['dtype'] === 'file' ? "file_input" : null} htmlFor={object['dtype']+index}>
                                        {Object.keys(object)[0]}
                                    </label>
                                    <br/>
                                    <input id={object['dtype']+index} hidden={object['dtype'] === 'file' ? true : false} type={object['dtype']} value={object[0]}/>
                                </div>
                    })}
                </div>
                <menu>
                    <button onClick={() => this.setState({opened: true})}>Сезам откройся</button>
                </menu>
            </>
        );
    }
}
 
export default Main;