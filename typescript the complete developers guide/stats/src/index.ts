import { WinsAnalisys } from './analyzers/WinsAnalysis';
import { CsvFileReader } from './CsvFileReader';
import MatchReader from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { Summary } from './Summary';


// const csvFileReader = new CsvFileReader('football.csv');

// const matchReader = new MatchReader(csvFileReader);
const matchReader =  MatchReader.fromCsv('football.csv');
matchReader.load();

// const summary = new Summary(new WinsAnalisys('Man United'), new HtmlReport())
const summary = Summary.winsAnalysisWithHtmlReport('Man United')

summary.buildAndPrintReport(matchReader.matches);