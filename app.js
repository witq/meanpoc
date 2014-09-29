<!doctype html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <base href="/">

    <title>MEANPOC</title>

    <!-- injector:bower:css -->
    <!-- endinjector -->

    <!-- injector:css -->
    <!-- endinjector -->

</head>
<body ng-app="meanPocApp" ng-controller="AppController as app">
    <div class="container">

        <nav class="navbar navbar-inverse">
            <div class="navbar-header">
                <a class="navbar-brand" href="/">MEANPOC</a>
            </div>
            <ul>
                <li ng-repeat="route in app.routes">
                    <a ng-href="{{route.href}}" ng-bind="route.name"></a>
                </li>
            </ul>
        </nav>

        <div ng-view></div>

    </div>

    <!-- injector:bower:js -->
    <!-- endinjector -->

    <!-- injector:js -->
    <script src="/public/app.js"></script>
    <!-- endinjector -->

</body>
</html>
