// Type definitions for printer 0.2
// Project: http://github.com/tojocky/node-printer
// Definitions by: Florentin Szomoru <https://github.com/zmooky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace printer {
    /**
     * Printer job details
     */
    interface IPrinterJob {
        id: number;
        name: string;
        printerName: string;
        user: string;
        format: string;
        priority: number;
        size: number;
        status: [];
        machineName: string;
        document: string;
        notifyName: string;
        printProcessor: string;
        driverName: string;
        position: number;
        startTime: number;
        untilTime: number;
        totalPages: number;
        time: number;
        pagesPrinted: number;
    }

    /**
     * Printer listing information
     */
    interface IPrinterInfo {
        name: string;
        portName: string;
        driverName: string;
        comment: string;
        printProcessor: string;
        datatype: string;
        status: [];
        statusNumber: number;
        attributes: string[];
        priority: number;
        defaultPriority: number;
        averagePPM: number;
    }

    /**
     * Printer detailed information ( contains jobs )
     */
    interface IPrinterDetailedInfo extends IPrinterInfo {
        name: string;
        portName: string;
        driverName: string;
        comment: string;
        printProcessor: string;
        datatype: string;
        status: [];
        statusNumber: number;
        attributes: string[];
        priority: number;
        defaultPriority: number;
        averagePPM: number;
        jobs: IPrinterJob[];
    }

    /**
     * Printer driver options ( not available for windows)
     * TODO: Check the structure on linux
     */
    interface IPrinterDriverOptions {}

    function getDefaultPrinterName(): string;

    function getJob(printerName: string, jobId: number): IPrinterJob;

    function getPrinter(printerName: string): IPrinterDetailedInfo;

    function getPrinterDriverOptions(printerName: string): IPrinterDriverOptions;

    function getPrinters(): IPrinterInfo[];

    function getSelectedPaperSize(printerName: string): any;

    function getSupportedJobCommands(): string[];

    function getSupportedPrintFormats(): string[];

    function printDirect(parameters: any, ...args: any[]): void;

    function printFile(parameters: any, ...args: any[]): any;

    function setJob(printerName: string, jobId: number, command: any): any;
}

export = printer;
