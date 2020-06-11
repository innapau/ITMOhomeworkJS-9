describe('Тест математической функции y = 1/x + sqrt(x)', function() {
    it('Позитивный тест: x = 4, у = 2.25', function() {
        let result = calc(4);
        expect(result).toBe(2.25);
    });

    it('Позитивный тест: x = 16, у = 4.0625', function() {
        let result = calc(16);
        expect(result).toBe(4.0625);
    });

    it('Негативный тест: x = 0', function() {
        let result = calc(0);
        expect(result).toBe('На ноль делить нельзя!');
    });

    it('Негативный тест: x < 0', function() {
        let result = calc(-4);
        expect(result).toBe('Нельзя взять корень из отрицательного числа');
    });
});
