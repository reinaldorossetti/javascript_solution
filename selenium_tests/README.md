# Comparação entre linhas do selenium e protractor.

A primeira vista a quantidade de linhas posso dizer que não faz muito sentido comparar, temos 8 linhas do angular_test.js e mais 4 do config.js, no selenium_test.js temos 7, mas no entanto não temos o describe e o it. Essa forma de fazer do protractor é bem mais descritiva que a do Selenium, mas podemos adicionar ao Selenium outras bibliotecas que vão fazer o mesmo. Resumindo vai ficar elas por elas em linhas.

Vantagens do Protractor:<br>
=> Não precisou da instância do browser;<br>
=> É um pouco menos verboso em escrita de código;<br>
=> Já tem um assert padrão, não preciso importar nenhuma biblioteca.

Vantagens do Selenium:<br>
=> Tem vários tipos de espera, pelo visto a espera do Protractor é interna.<br>
=> O Selenium é o core do Protractor, ou seja você também pode criar seu Framework e adaptar ao seu projeto.
