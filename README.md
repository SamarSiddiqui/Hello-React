"# Hello-React" 

### Planning
**Header => 1) logo 2) About,Contact,Cart**
**Body 1) SearchBar 2) FoodContainer 2.1 ResCards**


## Q: What is `Emmet`?

A: `Emmet` is the essential toolkit for web-developers. It allows you to `type shortcuts` that are then expanded into full pieces of code for writing `HTML and CSS`, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.

## Q: What is `CDN`? Why do we use it?

A: A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.
The goal is to provide high availability and performance by distributing the service spatially relative to end users.

## Q: Why is `React known as React`?

A: And it's called `React` because it `reacts`. It was developed by Facebook (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they're doing things like mouse clicking, submitting and typing.

## Q: What is `crossorigin in script tag`?

A: The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request.
The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

### _Syntax_

```sh
<script crossorigin="anonymous|use-credentials">
```

## Q: What is difference between `React and ReactDOM`?

A: `React` is a JavaScript library for building User Interfaces whereas `ReactDOM` is also JavaScript library that allows `React to interact with the DOM`.

The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains `ReactDOM.render()`, and in react-dom/server we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.



### - Two types of Import And Export

**Ist-Default Export/Import (Single File)**
- Ist Default Export
export default Header;
import Header from "./path

**IInd - Named Import/Export (Multiple Files)**
export const variableName1 = "value"
export const variableName2 = "value"

import {variableName1} from "./path"
import {variableName2} from "./path"




