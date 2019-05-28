import { someFunction } from './functions';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
  var output = someFunction("This is output from functions.js");
  $("#output").text(output);
});