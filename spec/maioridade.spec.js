describe("Teste de validação - Maior Idade", function(){
    
    it("Validação Maior Idade", function(){
        expect(maioridade(18)).toBe('Maior Idade');
    });

});

describe("Teste de validação - Menor Idade", function(){ 
    it("Validação Menor Idade", function(){
        expect(maioridade(10)).toBe('Menor Idade');
    });
});