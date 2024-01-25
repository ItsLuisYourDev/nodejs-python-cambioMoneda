import requests
from tkinter import *
import tkinter as tk
from tkinter import ttk

api = "http://localhost/moneda"
root = tk.Tk()
root.configure(bg='#FCF3CF')

def vistaResgistros():
    resultado = requests.get(api)
    if resultado.status_code == 200:
        resultado = resultado.json()
        #print(resultado)
    else:
        print(resultado.status_code)    
    for i, item in enumerate(resultado):
        tk.Label(root, text=item["monedaOrigen"]).grid(row=i+7, column=0)
        tk.Label(root, text=item["valor"]).grid(row=i+7, column=1)
        tk.Label(root, text=item["monedaDestino"]).grid(row=i+7, column=2)
        tk.Label(root, text=item["cambio"]).grid(row=i+7, column=3)
        Button(root,text="Eliminar",command=lambda id=item["_id"]: eliminar(id)).grid(row=i+7, column=4)
        Button(root ,text="Cambiar",command=lambda id=item["_id"]: edtitarDatos(id)).grid(row=i+7, column=5)


def eliminar(id):
    apiDelete = api+"/"+id
    resultado = requests.delete(apiDelete)
    if resultado.status_code == 200:
        resultadoGet = requests.get(api)
        resultado = resultadoGet.json()
        print("Eliminado c")
        for widget in root.grid_slaves():
            widget.grid_forget()
        etiquetas()
        vistaIngresar()
        vistaResgistros()
    else:
        print(resultado.status_code)    
        
vistaResgistros()

opciones = ['dolar', 'euro', 'real', 'Peso-Mexicano','sol']
valorOrigenIng = tk.StringVar(root)
valorOrigenIng.set(opciones[0])
valorDestinoIng = tk.StringVar(root)
valorDestinoIng.set(opciones[0])

ValorIngreso = StringVar()
def Ingresar():
    data = {
    "monedaOrigen": valorDestinoIng.get(),
    "valor": ValorIngreso.get(),
    "monedaDestino": valorOrigenIng.get()
    }
    resultado = requests.post(api,data)
    if resultado.status_code == 200:
        resultadoGet = requests.get(api)
        resultado = resultadoGet.json()
        print("registros ingresados")
        for widget in root.grid_slaves():
            widget.grid_forget()
        vistaIngresar()
        etiquetas()
        vistaResgistros()
    else:
        print(resultado.status_code)  


def edtitarDatos(id):
    mostrar1 = api+"/"+id
    resultadoGet = requests.get(mostrar1)
    resultado = resultadoGet.json()
    #print(resultado)
    print("registros ingresados")
    for widget in root.grid_slaves():
        widget.grid_forget()
    etiquetas()
    vistaResgistros()

    eApp=ttk.OptionMenu(root, valorDestinoIng, *opciones,command=imprimir_opcion())
    eApp.grid(pady=5, row=1, column=2)

    Label(root, text="Moneda").grid(pady=5, row=2, column=1)
    eValorIngreso=Entry(textvariable=ValorIngreso)
    eValorIngreso.delete("0", "end")
    eValorIngreso.insert(0,resultado["valor"])
    eValorIngreso.grid(pady=5, row=2, column=2)

    eApp=ttk.OptionMenu(root, valorOrigenIng, *opciones,command=imprimir_opcion())
    eApp.grid(pady=5, row=4, column=2)


    Button(root, text="editar",command=lambda id=id: editar(id)).grid(pady=5, row=5, column=2)


def editar(id):
    data = {
    "id":id,
    "monedaOrigen": valorDestinoIng.get(),
    "valor": ValorIngreso.get(),
    "monedaDestino": valorOrigenIng.get()
    }

    resultado = requests.put(api,data)
    if resultado.status_code == 200:
        resultadoGet = requests.get(api)
        resultado = resultadoGet.json()
        print("registros ingresados")
        for widget in root.grid_slaves():
            widget.grid_forget()
        etiquetas()
        vistaResgistros()
        vistaIngresar()

        

    else:
        print(resultado.status_code)   
def imprimir_opcion():
    #print(valorOrigenIng.get())
    srtResul= valorOrigenIng.get()

def vistaIngresar():
    #Label(root, text="monedaOrigen").grid(pady=5, row=1, column=0)
    selectorO = ttk.OptionMenu(root, valorDestinoIng, *opciones,command=imprimir_opcion())
    selectorO.grid(pady=5, row=1, column=2)

    Label(root, text="Moneda").grid(pady=5, row=2, column=0)
    Entry(textvariable=ValorIngreso).grid(pady=5, row=2, column=2)

    #Label(root, text="monedaDestino").grid(pady=5, row=1, column=4)
    selector = ttk.OptionMenu(root, valorOrigenIng, *opciones,command=imprimir_opcion())
    #print(valorOrigenIng.get())
    selector.grid(pady=5, row=4, column=2)

    Button(root, text="Ingresar", command=Ingresar).grid(pady=5, row=5, column=2)

vistaIngresar()

root.title("🔥euro sol Peso-Mexicano Yen 🧑‍💻")

def etiquetas():
    tk.Label(root, text="Moneda-Origen").grid(row=6, column=0)
    tk.Label(root, text="Valor").grid(row=6, column=1)
    tk.Label(root, text="Moneda-Destino").grid(row=6, column=2)
    tk.Label(root, text="Cambio").grid(row=6, column=3)
    tk.Label(root, text="Accion").grid(row=6, column=4)
etiquetas()
root.mainloop()

