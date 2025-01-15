import sqlite3 

connector = sqlite3.connect('ecommerce.db')
cursor = connector.cursor()

cursor.execute("""create table vendas (Id Integer Primary key,
                                        valor_venda NUM not null,
                                        cliente_id Integet Not null,
                                        foreign key (cliente_id) references clientes (id))""")
cursor.execute("insert into vendas values (1, 15.60, 1)")
connector.commit()

cursor.execute("""select * from vendas v
               join clientes c on v.cliente_id=c.id""")
vendas = cursor.fetchall()
print(vendas)

connector.close()