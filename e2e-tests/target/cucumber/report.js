$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/multiplication.feature");
formatter.feature({
  "line": 1,
  "name": "Users are able to send their multiplication",
  "description": "attempts, which may be correct or not. When users\r\nsend a correct attempt, they get a response indicating\r\nthat the result is the right one. Also, they get points\r\nand potentially some badges when they are right, so they\r\nget motivation to come back and keep playing. Badges are\r\nwon for the first right attempt and when the user gets 100,\r\n500 and 999 points respectively. If users send a wrong\r\nattempt, they don\u0027t get any point or badge.",
  "id": "users-are-able-to-send-their-multiplication",
  "keyword": "Feature"
});
formatter.before({
  "duration": 160802810,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "The user sends a first right attempt and gets a badge",
  "description": "",
  "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-first-right-attempt-and-gets-a-badge",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "the user john_snow sends 1 right attempts",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the user gets a response indicating the attempt is right",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "the user gets 10 points for the attempt",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user gets the FIRST_WON badge",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 25
    },
    {
      "val": "right",
      "offset": 27
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 29695298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 51
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_a_response_indicating_the_attempt_is(String)"
});
formatter.result({
  "duration": 728078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 14
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_points_for_the_attempt(int)"
});
formatter.result({
  "duration": 2044845403,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[1]0\u003e but was:\u003c[]0\u003e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat microservices.book.MultiplicationFeatureSteps.the_user_gets_points_for_the_attempt(MultiplicationFeatureSteps.java:56)\r\n\tat ✽.And the user gets 10 points for the attempt(src/test/resources/multiplication.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "FIRST_WON",
      "offset": 18
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_the_type_badge(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 133869716,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "The user sends a second right attempt and gets points only",
  "description": "",
  "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-second-right-attempt-and-gets-points-only",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "the user john_snow sends 1 right attempts",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user gets the FIRST_WON badge",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user john_snow sends 1 right attempts",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the user gets a response indicating the attempt is right",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "the user gets 10 points for the attempt",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the user does not get any badge",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 25
    },
    {
      "val": "right",
      "offset": 27
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 42479313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FIRST_WON",
      "offset": 18
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_the_type_badge(String)"
});
formatter.result({
  "duration": 208061774,
  "error_message": "java.lang.AssertionError: \r\nExpecting:\r\n \u003c[]\u003e\r\nto contain:\r\n \u003c[\"FIRST_WON\"]\u003e\r\nbut could not find:\r\n \u003c[\"FIRST_WON\"]\u003e\r\n\r\n\tat microservices.book.MultiplicationFeatureSteps.the_user_gets_the_type_badge(MultiplicationFeatureSteps.java:65)\r\n\tat ✽.And the user gets the FIRST_WON badge(src/test/resources/multiplication.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 25
    },
    {
      "val": "right",
      "offset": 27
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 51
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_a_response_indicating_the_attempt_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 14
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_points_for_the_attempt(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MultiplicationFeatureSteps.the_user_does_not_get_any_badge()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 72403618,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "The user sends a wrong attempt and gets nothing",
  "description": "",
  "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-wrong-attempt-and-gets-nothing",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "the user john_snow sends 1 wrong attempts",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "the user gets a response indicating the attempt is wrong",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "the user gets 0 points for the attempt",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the user does not get any badge",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 25
    },
    {
      "val": "wrong",
      "offset": 27
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 29711334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wrong",
      "offset": 51
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_a_response_indicating_the_attempt_is(String)"
});
formatter.result({
  "duration": 120277,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 14
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_points_for_the_attempt(int)"
});
formatter.result({
  "duration": 2050192764,
  "status": "passed"
});
formatter.match({
  "location": "MultiplicationFeatureSteps.the_user_does_not_get_any_badge()"
});
formatter.result({
  "duration": 18477452,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 31,
      "value": "# Checks the Bronze, Silver and Gold badges"
    }
  ],
  "line": 32,
  "name": "The user sends a right attempt after \u003cprevious_attempts\u003e right attempts and then gets a badge \u003cbadge_name\u003e",
  "description": "",
  "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-right-attempt-after-\u003cprevious-attempts\u003e-right-attempts-and-then-gets-a-badge-\u003cbadge-name\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "the user john_snow sends \u003cprevious_attempts\u003e right attempts",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "the user john_snow sends 1 right attempts",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the user gets a response indicating the attempt is right",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "the user gets 10 points for the attempt",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the user gets the \u003cbadge_name\u003e badge",
  "keyword": "And "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-right-attempt-after-\u003cprevious-attempts\u003e-right-attempts-and-then-gets-a-badge-\u003cbadge-name\u003e;",
  "rows": [
    {
      "cells": [
        "previous_attempts",
        "badge_name"
      ],
      "line": 40,
      "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-right-attempt-after-\u003cprevious-attempts\u003e-right-attempts-and-then-gets-a-badge-\u003cbadge-name\u003e;;1"
    },
    {
      "cells": [
        "9",
        "BRONZE_MULTIPLICATOR"
      ],
      "line": 41,
      "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-right-attempt-after-\u003cprevious-attempts\u003e-right-attempts-and-then-gets-a-badge-\u003cbadge-name\u003e;;2"
    },
    {
      "cells": [
        "49",
        "SILVER_MULTIPLICATOR"
      ],
      "line": 42,
      "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-right-attempt-after-\u003cprevious-attempts\u003e-right-attempts-and-then-gets-a-badge-\u003cbadge-name\u003e;;3"
    },
    {
      "cells": [
        "99",
        "GOLD_MULTIPLICATOR"
      ],
      "line": 43,
      "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-right-attempt-after-\u003cprevious-attempts\u003e-right-attempts-and-then-gets-a-badge-\u003cbadge-name\u003e;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 156770800,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "The user sends a right attempt after 9 right attempts and then gets a badge BRONZE_MULTIPLICATOR",
  "description": "",
  "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-right-attempt-after-\u003cprevious-attempts\u003e-right-attempts-and-then-gets-a-badge-\u003cbadge-name\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "the user john_snow sends 9 right attempts",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "the user john_snow sends 1 right attempts",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the user gets a response indicating the attempt is right",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "the user gets 10 points for the attempt",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the user gets the BRONZE_MULTIPLICATOR badge",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "9",
      "offset": 25
    },
    {
      "val": "right",
      "offset": 27
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 337833408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 25
    },
    {
      "val": "right",
      "offset": 27
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 27608249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 51
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_a_response_indicating_the_attempt_is(String)"
});
formatter.result({
  "duration": 110655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 14
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_points_for_the_attempt(int)"
});
formatter.result({
  "duration": 2036269806,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[1]0\u003e but was:\u003c[]0\u003e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat microservices.book.MultiplicationFeatureSteps.the_user_gets_points_for_the_attempt(MultiplicationFeatureSteps.java:56)\r\n\tat ✽.And the user gets 10 points for the attempt(src/test/resources/multiplication.feature:36)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "BRONZE_MULTIPLICATOR",
      "offset": 18
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_the_type_badge(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 172265380,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "The user sends a right attempt after 49 right attempts and then gets a badge SILVER_MULTIPLICATOR",
  "description": "",
  "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-right-attempt-after-\u003cprevious-attempts\u003e-right-attempts-and-then-gets-a-badge-\u003cbadge-name\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "the user john_snow sends 49 right attempts",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "the user john_snow sends 1 right attempts",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the user gets a response indicating the attempt is right",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "the user gets 10 points for the attempt",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the user gets the SILVER_MULTIPLICATOR badge",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "49",
      "offset": 25
    },
    {
      "val": "right",
      "offset": 28
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 1939985888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 25
    },
    {
      "val": "right",
      "offset": 27
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 28296234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 51
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_a_response_indicating_the_attempt_is(String)"
});
formatter.result({
  "duration": 83713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 14
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_points_for_the_attempt(int)"
});
formatter.result({
  "duration": 2047086086,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[1]0\u003e but was:\u003c[]0\u003e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat microservices.book.MultiplicationFeatureSteps.the_user_gets_points_for_the_attempt(MultiplicationFeatureSteps.java:56)\r\n\tat ✽.And the user gets 10 points for the attempt(src/test/resources/multiplication.feature:36)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "SILVER_MULTIPLICATOR",
      "offset": 18
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_the_type_badge(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 416343254,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "The user sends a right attempt after 99 right attempts and then gets a badge GOLD_MULTIPLICATOR",
  "description": "",
  "id": "users-are-able-to-send-their-multiplication;the-user-sends-a-right-attempt-after-\u003cprevious-attempts\u003e-right-attempts-and-then-gets-a-badge-\u003cbadge-name\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "the user john_snow sends 99 right attempts",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "the user john_snow sends 1 right attempts",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the user gets a response indicating the attempt is right",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "the user gets 10 points for the attempt",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the user gets the GOLD_MULTIPLICATOR badge",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "99",
      "offset": 25
    },
    {
      "val": "right",
      "offset": 28
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 3232212137,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john_snow",
      "offset": 9
    },
    {
      "val": "1",
      "offset": 25
    },
    {
      "val": "right",
      "offset": 27
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_sends_attempts(String,int,String)"
});
formatter.result({
  "duration": 31713067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 51
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_a_response_indicating_the_attempt_is(String)"
});
formatter.result({
  "duration": 213933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 14
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_points_for_the_attempt(int)"
});
formatter.result({
  "duration": 2030402848,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[1]0\u003e but was:\u003c[]0\u003e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat microservices.book.MultiplicationFeatureSteps.the_user_gets_points_for_the_attempt(MultiplicationFeatureSteps.java:56)\r\n\tat ✽.And the user gets 10 points for the attempt(src/test/resources/multiplication.feature:36)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "GOLD_MULTIPLICATOR",
      "offset": 18
    }
  ],
  "location": "MultiplicationFeatureSteps.the_user_gets_the_type_badge(String)"
});
formatter.result({
  "status": "skipped"
});
});