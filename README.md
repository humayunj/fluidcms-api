# FluidCMS Javascript Wrapper

This package provides wrapper for FluidCMS RestAPI. The aim of the package is to provide Javascript interface and manage RestAPI itself.

## Features 
- Typescript support
- Promise based API
- Consistent Interface
- Caching

## Installation

Install from npm
`npm install fluidcms-api`
or
`yarn add fluidcms-api`

## Initializing

Initalize by creating FluidCMS instance. Provide ready only full access token in the constructor.

```javascript
import { FluidCMS } from "fluidcms-api"

const FluidAPI = new FluidCMS(<token>);
export default FluidAPI;
```

## Getting started

You can start by getting model records, or creating new records.

```javascript
import { FluidCMS } from "fluidcms-api"

const FluidAPI = new FluidCMS(<token>);

async function getProducts() {
    return await FluidAPI.getAllRecords('product');
}

async function createProduct({ name, tag }) {
    
    let productId = await FluidAPI.createRecord('product',[{
        fieldIdentifier:'product_name',
        value:name,
    },
    {
        fieldIdentifier:'product_tag',
        value:tag,
    }]);

    return productId;
}

```


## Reference


### Class: FluidCMS

### Table of contents

### Constructors

- [constructor](FluidCMS.md#constructor)

### Properties

- [token](FluidCMS.md#token)

### Methods

- [createField](FluidCMS.md#createfield)
- [createModel](FluidCMS.md#createmodel)
- [createRecord](FluidCMS.md#createrecord)
- [deleteField](FluidCMS.md#deletefield)
- [deleteModel](FluidCMS.md#deletemodel)
- [deleteMultipleRecords](FluidCMS.md#deletemultiplerecords)
- [deleteRecord](FluidCMS.md#deleterecord)
- [getAllRecords](FluidCMS.md#getallrecords)
- [getField](FluidCMS.md#getfield)
- [getMedia](FluidCMS.md#getmedia)
- [getModel](FluidCMS.md#getmodel)
- [getModels](FluidCMS.md#getmodels)
- [getRecord](FluidCMS.md#getrecord)
- [updateField](FluidCMS.md#updatefield)
- [updateModel](FluidCMS.md#updatemodel)
- [updateRecord](FluidCMS.md#updaterecord)
- [uploadRecordImage](FluidCMS.md#uploadrecordimage)

## Constructors

### constructor

• **new FluidCMS**(`token`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Defined in

[lib.ts:23](https://github.com/humayunj/fluidcms-api/blob/3c8c7b0/lib.ts#L23)

## Properties

### token

• **token**: `string`

#### Defined in

[lib.ts:22](https://github.com/humayunj/fluidcms-api/blob/3c8c7b0/lib.ts#L22)

## Methods

### createField

▸ **createField**(`modelIdentifier`, `fieldsData`): `Promise`<`IModelField`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelIdentifier` | `string` |
| `fieldsData` | `Omit`<`IModelField`, ``"uid"``\> |

#### Returns

`Promise`<`IModelField`\>

#### Defined in

[lib.ts:57](https://github.com/humayunj/fluidcms-api/blob/3c8c7b0/lib.ts#L57)

___

### createModel

▸ **createModel**(`fieldsData`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldsData` | `Omit`<`IModel`, ``"uid"`` \| ``"fields"``\> |

#### Returns

`Promise`<`string`\>

#### Defined in

[lib.ts:43](https://github.com/humayunj/fluidcms-api/blob/3c8c7b0/lib.ts#L43)

___

### createRecord

▸ **createRecord**(`modelIdentifier`, `fieldsData`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelIdentifier` | `string` |
| `fieldsData` | { `fieldIdentifier`: `string` ; `value`: `any`  }[] |

#### Returns

`Promise`<`string`\>

#### Defined in

[lib.ts:90](https://github.com/humayunj/fluidcms-api/blob/3c8c7b0/lib.ts#L90)

___

### deleteField

▸ **deleteField**(`fieldIdentifier`, `modelIdentifier`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldIdentifier` | `string` |
| `modelIdentifier` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib.ts:83](https://github.com/humayunj/fluidcms-api/blob/3c8c7b0/lib.ts#L83)

___

### deleteModel

▸ **deleteModel**(`modelIdentifier`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelIdentifier` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib.ts:49](https://github.com/humayunj/fluidcms-api/blob/3c8c7b0/lib.ts#L49)

___

### deleteMultipleRecords

▸ **deleteMultipleRecords**(`recordUID`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recordUID` | `string`[] |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib.ts:106](https://github.com/humayunj/fluidcms-api/blob/3c8c7b0/lib.ts#L106)

___

### deleteRecord

▸ **deleteRecord**(`recordUID`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recordUID` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib.ts:103](https://github.com/humayunj/fluidcms-api/blob/3c8c7b0/lib.ts#L103)

___

### getAllRecords

▸ **getAllRecords**(`modelIdentifier`): `Promise`<`IRecord`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelIdentifier` | `string` |

#### Returns

`Promise`<`IRecord`[]\>

#### Defined in

[lib.ts:122](https://github.com/humayunj/fluidcms-api/blob/3c8c7b0/lib.ts#L122)

___

### getField

▸ **getField**(`fieldIdentifier`, `modelIdentifier`): `Promise`<`IModelField`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldIdentifier` | `string` |
| `modelIdentifier` | `string` |

#### Returns

`Promise`<`IModelField`\>

#### Defined in

[lib.ts:76](https://github.com/humayunj/fluidcms-api/blob/3c8c7b0/lib.ts#L76)

___

### getMedia

▸ **getMedia**(`mediaID`): `Promise`<`Object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaID` | `string` |

#### Returns

`Promise`<`Object`\>

#### Defined in

[lib.ts:115](https://github.com/humayunj/fluidcms-api/blob/3c8c7b0/lib.ts#L115)

___

### getModel

▸ **getModel**(`modelIdentifier`): `Promise`<`IModel`\>

Get a model by ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelIdentifier` | `string` |

#### Returns

`Promise`<`IModel`\>

Promise whic resolve to IModel or rejected with APIResponseError

#### Defined in

[lib.ts:32](https://github.com/humayunj/fluidcms-api/blob/3c8c7b0/lib.ts#L32)

___

### getModels

▸ **getModels**(): `Promise`<`IModel`[]\>

#### Returns

`Promise`<`IModel`[]\>

#### Defined in

[lib.ts:53](https://github.com/humayunj/fluidcms-api/blob/3c8c7b0/lib.ts#L53)

___

### getRecord

▸ **getRecord**(`recordUID`): `Promise`<`IRecord`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recordUID` | `string` |

#### Returns

`Promise`<`IRecord`\>

#### Defined in

[lib.ts:119](https://github.com/humayunj/fluidcms-api/blob/3c8c7b0/lib.ts#L119)

___

### updateField

▸ **updateField**(`fieldIdentifier`, `modelIdentifier`, `fieldsData`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldIdentifier` | `string` |
| `modelIdentifier` | `string` |
| `fieldsData` | `Partial`<`Omit`<`IModelField`, ``"uid"``\>\> |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib.ts:63](https://github.com/humayunj/fluidcms-api/blob/3c8c7b0/lib.ts#L63)

___

### updateModel

▸ **updateModel**(`modelIdentifier`, `fieldsData`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelIdentifier` | `string` |
| `fieldsData` | `Partial`<`Omit`<`IModel`, ``"uid"`` \| ``"fields"``\>\> |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib.ts:36](https://github.com/humayunj/fluidcms-api/blob/3c8c7b0/lib.ts#L36)

___

### updateRecord

▸ **updateRecord**(`recordUID`, `fieldsData`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recordUID` | `string` |
| `fieldsData` | { `fieldIdentifier`: `string` ; `value`: `any`  }[] |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[lib.ts:96](https://github.com/humayunj/fluidcms-api/blob/3c8c7b0/lib.ts#L96)

___

### uploadRecordImage

▸ **uploadRecordImage**(`image`): `Promise`<`Object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `File` |

#### Returns

`Promise`<`Object`\>

#### Defined in

[lib.ts:112](https://github.com/humayunj/fluidcms-api/blob/3c8c7b0/lib.ts#L112)

