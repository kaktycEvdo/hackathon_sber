from langchain.schema import HumanMessage, SystemMessage
from langchain.chat_models.gigachat import GigaChat
from starlette.middleware.cors import CORSMiddleware

chat = GigaChat(credentials="OTQ5M2E3M2QtOWQ1ZS00NzE5LWE4M2UtOGZlZGIzZWUyNTQwOmE4YWYxNDhhLWQwZDctNGNiNS1iMTM4LTc3NmE3Y2UyMDE3Yg==", verify_ssl_certs=False)

from fastapi import FastAPI

app = FastAPI()

app.add_middleware(
CORSMiddleware,
allow_origins=["*"], # Allows all origins

allow_credentials=True,
allow_methods=["*"], # Allows all methods
allow_headers=["*"], # Allows all headers
)

message_id = 0

messages = [
    SystemMessage(
        content="Ты бот-ассистент, который помогает андеррайтеру принять решение по выдаче кредита."
    )
]

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

@app.post("/gigachat/")
async def post_request(*, q: str | None = None):
    messages.append({message_id: HumanMessage(content=q)})
    message_id+=1
    res = chat(messages)
    messages.pop()

    return res

@app.get("/")
async def get_data(q: int | None = None):
    if q:
        return {"responce": data[q]}
    else:
        return {"responce": data}