<p align="center">
  <img src="studio/RootCauseAnalysis/Assets.xcassets/AppIcon.appiconset/icon_256x256@2x.png" width="256" height="256" />
</p>

<h1 align="center">Root Cause Analysis (Cause-Effect Analysis)</h1>

<br />

> This project is in an early stage and lacks documentation – however, with some effort, it can be used very effectively. If you're interested in contributing or using it at your company, feel free to open a GitHub issue or get in touch with me. I'm currently supporting a few early adopters.
>
> Tim Ivaikin doesn't provide support for this project. The code and automated tests are not at the same degree of technical rigor as other Tim Ivaikin projects.

## Overview

[![Build Status](https://travis-ci.org/ivaykin/RootCauseAnalysis.svg?branch=master)](https://travis-ci.org/airbnb/RootCauseAnalysis)

RootCauseAnalysis is a collection of tools for Root Cause Analysis (Cause-Effect Analysis).

RootCauseAnalysis consists primarily of 3 parts:

- [Overview](#overview)
  - [RootCauseAnalysis Components](#rootcauseanalysis-components)
  - [RootCauseAnalysis Studio](#rootcauseanalysis-studio)
  - [RootCauseAnalysis Compiler](#rootcauseanalysis-compiler)
- [Core Team](#core-team)
  - [Contributors](#contributors)

Why RootCauseAnalysis? Read more about challenges with root cause analysis at scale, and how RootCauseAnalysis solves them [here](./docs/overview/background.md).

### RootCauseAnalysis Components

A root cause is defined in JSON as a collection of:

- Name
- 5W2H question
- 5Why?
- Data Types

The specification for these files can be found in the [docs](./docs/file-formats/README.md).

### RootCauseAnalysis Studio

RootCauseAnalysis Studio provides a graphical interface for working with `.cause` files.

RootCauseAnalysis Studio is primarily for building component systems, but can also be used for:

- Quickly detecting root causes from existing opportunities / unwelcome
- Viewing causes with real data from JSON files or APIs
- Experimenting with causes across multiple screen sizes
- Automating root cause analysis tasks - e.g. detecting 5 Whys? or producing Ishikawa Diagram
- and more!

You can try it out by following the [installation instructions](./studio/README.md).

> Wondering if this replaces BPMN 2? Why a native Mac App? I answer some common questions here in the [FAQ](./docs/overview/faq.md).

### RootCauseAnalysis Compiler

The RootCauseAnalysis Compiler converts .cause files to UI code for various targets.

Currently, these targets are supported:

- Angular 8 / Web (TypeScript)

Support is planned for:

- iOS / macOS (TypeScript)

The target with the most features currently is TypeScript. However, it's still fairly rough. If you want to try it out, check out the [installation instructions](./compiler/core/README.md).

If you're looking for a sample of the generated code, check out [the test cases](./examples/generated/test)

## Core Team

- Created by [Tim Ivaikin](https://github.com/Ivajkin)
- RootCauseAnalysis Compiler development by [Tim Ivaikin](https://github.com/Ivajkin)

### Contributors

- Design & development help by [Tim Ivaikin](https://github.com/Ivajkin)
- Gorgeous logo by [Tim Ivaikin](https://github.com/Ivajkin)
- RootCauseAnalysis Studio development by [Tim Ivaikin](https://github.com/Ivajkin)
- Swift code generation help by [Tim Ivaikin](https://github.com/Ivajkin)
- RootCauseAnalysis Compiler development by [Tim Ivaikin](https://github.com/Ivajkin)
