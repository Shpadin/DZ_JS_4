let user_input = Number.parseInt(prompt('Сколько градусов Цельсия???'));
alert(`Из этого Цельсия: ${user_input}  можем предложить  ${Math.floor(((9 / 5) * user_input + 32)*100)/100} Фаренгейтов. Это самое лучше предложение. Отказываться нельзя`)