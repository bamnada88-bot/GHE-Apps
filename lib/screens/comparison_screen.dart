import 'package:flutter/material.dart';
import 'package:charts_flutter/flutter.dart' as charts;

class ComparisonScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Performance Comparison'),
      ),
      body: Center(
        child: ComparisonChart(),
      ),
    );
  }
}

class ComparisonChart extends StatelessWidget {
  final List<charts.Series> seriesList;
  final bool animate;

  ComparisonChart({this.seriesList, this.animate});

  @override
  Widget build(BuildContext context) {
    return charts.BarChart(
      seriesList,
      animate: animate,
    );
  }

  static List<charts.Series<PerformanceData, String>> createSampleData() {
    final data = [
      PerformanceData('Feature A', 50),
      PerformanceData('Feature B', 25),
      PerformanceData('Feature C', 75),
    ];

    return [
      charts.Series<PerformanceData, String>(
        id: 'Performance',
        colorFn: (_, __) => charts.MaterialPalette.blue.shadeDefault,
        domainFn: (PerformanceData performance, _) => performance.feature,
        measureFn: (PerformanceData performance, _) => performance.value,
        data: data,
      )
    ];
  }
}

class PerformanceData {
  final String feature;
  final int value;

  PerformanceData(this.feature, this.value);
}