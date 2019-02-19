import * as React from "react";
import { Nav, toString, toEditorState, getMentions } from "./src";

export interface Props {
  value: object,
  suggestions: any[],
  prefix: string | string[],
  prefixCls: string,
  tag: any,
  style: object,
  className: string,
  onSearchChange: Function,
  onChange: Function,
  mode: string,
  multiLines: boolean,
  suggestionStyle: object,
  placeholder: string,
  defaultValue: object,
  notFoundContent: any,
  position: string,
  onFocus: Function,
  onBlur: Function,
  onSelect: Function,
  getSuggestionContainer: Function,
  noRedup: boolean,
  mentionStyle: object,
  placement: string,
  editorKey: string,
}

export const Nav: typeof Nav;
export const toString: typeof toString;
export const toEditorState: typeof toEditorState;
export const getMentions: typeof getMentions; 

export default class Mention extends React.Component<Props> {
  static Nav: typeof Nav;
  static toString: typeof toString;
  static toEditorState: typeof toEditorState; 
  static getMentions: typeof getMentions; 
}