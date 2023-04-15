import React from 'react';
import 'react-native';
import { format2ShortId } from '../src/utils/string';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Button } from '../src/modules/commons/components';

it('format2ShortId run correctly', () => {
    const inputString = '0xE84c387b8Cb670241F49f70e1fD8f110F74D0f02';
    const expectResult = '0xE84...0f02';
    const expectResult2 = '...0f02';

    expect(format2ShortId(inputString, 5, 4)).toEqual(expectResult);
    expect(format2ShortId(inputString, 0, 4)).toEqual(expectResult2);
});

test('Button renders correctly', () => {
    const btnName = 'Add';
    const buttonComponent = renderer.create(
        <Button
            text={btnName}
            onPressed={() => {
                console.log(1 + 1);
            }}
        />,
    );

    const tree = buttonComponent.toJSON();
    expect(buttonComponent).toMatchSnapshot();
});
