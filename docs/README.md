fluidcms-api / [Exports](modules.md)

# FluidCMS Javascript Wrapper

This package provides wrapper for FluidCMS RestAPI. The aim of the package is to provide Javascript interface and manage RestAPI itself.

## Features

- Typescript support
- Promise based API
- Consistent Interface
- Caching

## Showcase

- Blackstone Photo gallery

  [Website Link](https://black-stone.netlify.com/)

  [Source Code](https://github.com/humayunj/black-stone)

## Installation

Install from npm
`npm install fluidcms-api`
or
`yarn add fluidcms-api`

## Initializing

Initalize by calling FluidCMS function. Provide ready only full access token in the arguments.

```javascript
import FluidCMS from "fluidcms-api"

const api = FluidCMS("<PROJECT_TOKEN>");

let records = await api.getModel("article")
```

## Getting started

You can start by getting model records, or creating new records.

```javascript
import FluidCMS from "fluidcms-api"

const api = FluidCMS("<PROJECT_TOKEN>");

async function getProducts() {
    return await api.getAllRecords('product');
}

async function createProduct({ name, tag }) {

    let productId = await api.createRecord('article',{
        title:"A morning on Mars",
        tags:"mars, planets",
    });

    return productId;
}

```

## Reference

### Class: FluidCMS

### Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [token](#token)

### Methods

- [createField](#createfield)
- [createModel](#createmodel)
- [createRecord](#createrecord)
- [deleteField](#deletefield)
- [deleteModel](#deletemodel)
- [deleteMultipleRecords](#deletemultiplerecords)
- [deleteRecord](#deleterecord)
- [getAllRecords](#getallrecords)
- [getField](#getfield)
- [getMedia](#getmedia)
- [getModel](#getmodel)
- [getModels](#getmodels)
- [getRecord](#getrecord)
- [updateField](#updatefield)
- [updateModel](#updatemodel)
- [updateRecord](#updaterecord)
- [uploadRecordImage](#uploadrecordimage)

## Constructors

### constructor

• **new FluidCMS**(`token`)

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `token` | `string` |

## Properties

### token

• **token**: `string`

## Methods

### createField

▸ **createField**(`modelIdentifier`, `fieldsData`): `Promise`<`IModelField`\>

#### Parameters

| Name              | Type                            |
| :---------------- | :------------------------------ |
| `modelIdentifier` | `string`                        |
| `fieldsData`      | `Omit`<`IModelField`, `"uid"`\> |

#### Returns

`Promise`<`IModelField`\>

---

### createModel

▸ **createModel**(`fieldsData`): `Promise`<`string`\>

#### Parameters

| Name         | Type                                     |
| :----------- | :--------------------------------------- |
| `fieldsData` | `Omit`<`IModel`, `"uid"` \| `"fields"`\> |

#### Returns

`Promise`<`string`\>

---

### createRecord

▸ **createRecord**(`modelIdentifier`, `fieldsData`): `Promise`<`string`\>

#### Parameters

| Name              | Type                                               |
| :---------------- | :------------------------------------------------- |
| `modelIdentifier` | `string`                                           |
| `fieldsData`      | { `fieldIdentifier`: `string` ; `value`: `any` }[] |

#### Returns

`Promise`<`string`\>

---

### deleteField

▸ **deleteField**(`fieldIdentifier`, `modelIdentifier`): `Promise`<`boolean`\>

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `fieldIdentifier` | `string` |
| `modelIdentifier` | `string` |

#### Returns

`Promise`<`boolean`\>

---

### deleteModel

▸ **deleteModel**(`modelIdentifier`): `Promise`<`boolean`\>

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `modelIdentifier` | `string` |

#### Returns

`Promise`<`boolean`\>

---

### deleteMultipleRecords

▸ **deleteMultipleRecords**(`recordUID`): `Promise`<`boolean`\>

#### Parameters

| Name        | Type       |
| :---------- | :--------- |
| `recordUID` | `string`[] |

#### Returns

`Promise`<`boolean`\>

---

### deleteRecord

▸ **deleteRecord**(`recordUID`): `Promise`<`boolean`\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `recordUID` | `string` |

#### Returns

`Promise`<`boolean`\>

---

### getAllRecords

▸ **getAllRecords**(`modelIdentifier`): `Promise`<`IRecord`[]\>

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `modelIdentifier` | `string` |

#### Returns

`Promise`<`IRecord`[]\>

---

### getField

▸ **getField**(`fieldIdentifier`, `modelIdentifier`): `Promise`<`IModelField`\>

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `fieldIdentifier` | `string` |
| `modelIdentifier` | `string` |

#### Returns

`Promise`<`IModelField`\>

---

### getMedia

▸ **getMedia**(`mediaID`): `Promise`<`Object`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `mediaID` | `string` |

#### Returns

`Promise`<`Object`\>

---

### getModel

▸ **getModel**(`modelIdentifier`): `Promise`<`IModel`\>

Get a model by ID

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `modelIdentifier` | `string` |

#### Returns

`Promise`<`IModel`\>

Promise whic resolve to IModel or rejected with APIResponseError

---

### getModels

▸ **getModels**(): `Promise`<`IModel`[]\>

#### Returns

`Promise`<`IModel`[]\>

---

### getRecord

▸ **getRecord**(`recordUID`): `Promise`<`IRecord`\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `recordUID` | `string` |

#### Returns

`Promise`<`IRecord`\>

---

### updateField

▸ **updateField**(`fieldIdentifier`, `modelIdentifier`, `fieldsData`): `Promise`<`boolean`\>

#### Parameters

| Name              | Type                                        |
| :---------------- | :------------------------------------------ |
| `fieldIdentifier` | `string`                                    |
| `modelIdentifier` | `string`                                    |
| `fieldsData`      | `Partial`<`Omit`<`IModelField`, `"uid"`\>\> |

#### Returns

`Promise`<`boolean`\>

---

### updateModel

▸ **updateModel**(`modelIdentifier`, `fieldsData`): `Promise`<`boolean`\>

#### Parameters

| Name              | Type                                                 |
| :---------------- | :--------------------------------------------------- |
| `modelIdentifier` | `string`                                             |
| `fieldsData`      | `Partial`<`Omit`<`IModel`, `"uid"` \| `"fields"`\>\> |

#### Returns

`Promise`<`boolean`\>

---

### updateRecord

▸ **updateRecord**(`recordUID`, `fieldsData`): `Promise`<`boolean`\>

#### Parameters

| Name         | Type                                               |
| :----------- | :------------------------------------------------- |
| `recordUID`  | `string`                                           |
| `fieldsData` | { `fieldIdentifier`: `string` ; `value`: `any` }[] |

#### Returns

`Promise`<`boolean`\>

---

### uploadRecordImage

▸ **uploadRecordImage**(`image`): `Promise`<`Object`\>

#### Parameters

| Name    | Type   |
| :------ | :----- |
| `image` | `File` |

#### Returns

`Promise`<`Object`\>
