export declare class ConsoleView {
    private rl;
    show(msg: string): void;
    menu(): Promise<string>;
    ask(q: string): Promise<string>;
    showProducts(products: any[]): void;
    showTotal(total: number): void;
    close(): void;
}
//# sourceMappingURL=ConsoleView.d.ts.map