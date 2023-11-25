import Modal from './UI/Modal/Modal'
import { Component } from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Main extends Component {
    state = { opened: false }

    data = [ [
        {'ФИО': 'Фамилич'+' '+'Имён'+' '+'Отчествович', 'dtype' : 'text'},
        {'Дата рождения': '25.11.1999', 'dtype' : 'date'},
        {'Серия № паспорта': '2555 251444', 'dtype' : 'date'},
        {'Адрес регистрации': 'Россия г. Новосибирск ул. Коммунистическая д. 32', 'dtype' : 'textarea'},
        {'Адрес проживания': 'Россия г. Новосибирск ул. Коммунистическая д. 32', 'dtype' : 'textarea'},
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
    ],  [
        {'ФИО': 'Шишкин'+' '+'Даниил'+' '+'Сергеевич', 'dtype' : 'text'},
        {'Дата рождения': '15.01.1982', 'dtype' : 'date'},
        {'Серия № паспорта': '2565 531247', 'dtype' : 'date'},
        {'Адрес регистрации': 'Россия г. Москва ул. Ленина д. 12', 'dtype' : 'textarea'},
        {'Адрес проживания': 'Россия г. Москва ул. Ленина д. 12', 'dtype' : 'textarea'},
        {'Семейное положение': 'Женат', 'dtype' : 'text'},
        {'Наличие детей': 3, 'dtype' : 'number'},
        {'Должность': 'Старший менеджер по продажам', 'dtype' : 'text'},
        {'Ежемесячный доход по месту работы': 123000, 'dtype' : 'number'},
        {'Документ, подтверждающий доход': 'docx', 'dtype' : 'file'},
        {'Ежемесячный дополнительный доход': 10000, 'dtype' : 'text'},
        {'Документ, подтверждающий дополнительный доход': 'docx', 'dtype' : 'file'},
        {'Место работы': 'ООО\"Мутное дело\"', 'dtype' : 'text'},
        {'Стаж работы': 8, 'dtype' : 'number'},
        {'Источник доп. дохода': 'квартира', 'dtype' : 'text'},
        {'Наличие сбережений на счёте в банке': 'Нет', 'dtype' : 'text'}
    ],  [
        {'ФИО': 'Дураков'+' '+'Иван'+' '+'Степанович', 'dtype' : 'text'},
        {'Дата рождения': '01.06.2001', 'dtype' : 'date'},
        {'Серия № паспорта': '1893 579372', 'dtype' : 'date'},
        {'Адрес регистрации': 'Россия г. Владивасток ул. Красноармейская д. 17', 'dtype' : 'textarea'},
        {'Адрес проживания': 'Россия г. Владивасток ул. Красноармейская д. 17', 'dtype' : 'textarea'},
        {'Семейное положение': 'Холост', 'dtype' : 'text'},
        {'Наличие детей': 0, 'dtype' : 'number'},
        {'Должность': 'Работник общественного питания', 'dtype' : 'text'},
        {'Ежемесячный доход по месту работы': 21000, 'dtype' : 'number'},
        {'Документ, подтверждающий доход': 'типа документ ага', 'dtype' : 'file'},
        {'Ежемесячный дополнительный доход': 48000, 'dtype' : 'text'},
        {'Документ, подтверждающий дополнительный доход': 'типа его нет ага', 'dtype' : 'file'},
        {'Место работы': 'Вкусно - и Точка!', 'dtype' : 'text'},
        {'Стаж работы': 1, 'dtype' : 'number'},
        {'Источник доп. дохода': 'Нет', 'dtype' : 'text'},
        {'Наличие сбережений на счёте в банке': 'Нет', 'dtype' : 'text'}
    ]]
    
    lk_data = [{
        'ФИО': 'Фуржетов'+' '+'Антон'+' '+'Николаевич',
        'Домен': 'somedomain@sber.org',
        'Электронная почта': 'furget12@mail.ru',
        'Пароль': 'fu1get2pr'
    },{
        'ФИО': 'Жишкин'+' '+'Владимир'+' '+'Антонович',
        'Домен': 'somedomain@sber.org',
        'Электронная почта': 'jij0vl@mail.ru',
        'Пароль': 'jija64vl'
    },{
        'ФИО': 'Тужкин'+' '+'Сергей'+' '+'Михайлович',
        'Домен': 'somedomain@sber.org',
        'Электронная почта': 'tuj1kser@mail.ru',
        'Пароль': 'tuji1s7t'
    }]
    
    render() { 
        return (
            <>
                <Modal opened={this.state.opened} close={() => this.setState({opened: false})}>a</Modal>
                    {this.data.map((element, jndex) => {
                        return <div className='main_form'>
                            <div className='form_logo'>{this.props.logo}</div>
                            {element.map((object, index) => {
                                console.log()
                                return <div key={index}>
                                        <div className={object['dtype'] === 'file' ? "file_input" : null}>
                                            <label htmlFor={object['dtype']+index+""+jndex}>
                                                {Object.keys(object)[0]}
                                                {object['dtype'] === 'file' ? <FontAwesomeIcon icon={faDownload}/> : null}
                                            </label>
                                        </div>
                                        <br/>
                                        {object['dtype'] === 'textarea'
                                        ? <textarea id={object['dtype']+index+""+jndex} hidden={object['dtype'] === 'file' ? true : false}
                                        type={object['dtype']} defaultValue={object['dtype'] === 'file' ? '' : Object.values(object)[0]}/>
                                        : <input id={object['dtype']+index+""+jndex} hidden={object['dtype'] === 'file' ? true : false}
                                        type={object['dtype']} defaultValue={object['dtype'] === 'file' ? '' : Object.values(object)[0]}/>}
                                    </div>
                            })}
                        <button>Редактировать</button>
                        <button>Далее</button>
                        </div>
                    })}
                
                <menu>
                    <button onClick={() => this.setState({opened: true})}>Сезам откройся</button>
                </menu>
            </>
        );
    }
}
 
export default Main;