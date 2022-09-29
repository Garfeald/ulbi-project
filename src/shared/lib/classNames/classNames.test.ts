import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'someClass additional class1';
        expect(classNames('someClass', {}, ['additional', 'class1']))
            .toBe(expected);
    });
    test('with additional & mods', () => {
        const expected = 'someClass additional class1 mods scroll';
        expect(classNames(
            'someClass',
            { mods: true, scroll: true },
            ['additional', 'class1'],
        ))
            .toBe(expected);
    });
    test('with additional & mods false', () => {
        const expected = 'someClass additional class1 mods';
        expect(classNames(
            'someClass',
            { mods: true, scroll: false },
            ['additional', 'class1'],
        ))
            .toBe(expected);
    });
    test('with additional & mods undefined', () => {
        const expected = 'someClass additional class1 mods';
        expect(classNames(
            'someClass',
            { mods: true, scroll: undefined },
            ['additional', 'class1'],
        ))
            .toBe(expected);
    });
});
