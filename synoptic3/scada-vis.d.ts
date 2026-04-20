/** Colors table mapping color indices to color codes */
export declare interface ColorsTable {
    [index: number]: string;
}

/** Color table entry - can be string or number */
export declare type ColorTableEntry = string | number;

/** Keyboard options */
export declare interface KeyboardOptions {
    enabled?: boolean;
}

/** Mouse interaction options */
export declare interface MouseOptions {
    panEnabled?: boolean;
    zoomEnabled?: boolean;
}

/** Mouse wheel options */
export declare interface MouseWheelOptions {
    directionBackOut?: boolean;
    blockEventPropagation?: boolean;
}

/**
 * SCADAvis Web Component
 *
 * @example
 * <!-- Declarative usage -->
 * <scada-vis src="diagram.svg"></scada-vis>
 *
 * @example
 * // Programmatic usage
 * const component = document.querySelector('scada-vis');
 * component.setValue('TAG001', 123.45);
 */
declare class ScadaVis extends HTMLElement {
    static get observedAttributes(): string[];
    /**
     * Get the current version of the component
     * @returns {string} Version string
     */
    static get version(): string;
    private _engine;
    private _dataProcessor;
    private _vegaCharts;
    private _externalLibs;
    private _config;
    private _ready;
    private _tagsList;
    private _boundHandlers;
    private _elements;
    private _intervals;
    private _timeouts;
    private _resolveFunction;
    private _rejectFunction;
    constructor();
    /**
     * Called when the element is added to the DOM
     */
    connectedCallback(): void;
    /**
     * Async initialization - waits for dependencies then sets up component
     * @private
     */
    private _initialize;
    /**
     * Called when the element is removed from the DOM
     */
    disconnectedCallback(): void;
    /**
     * Called when observed attributes change
     * @param name - Attribute name
     * @param oldValue - Old value
     * @param newValue - New value
     */
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    /**
     * Initialize external libraries from global scope
     * @private
     */
    private _initExternalLibs;
    /**
     * Initialize all engines
     * @private
     */
    private _initEngines;
    /**
     * Render the component template and styles into Shadow DOM
     * @private
     */
    private _render;
    /**
     * Cache references to internal elements
     * @private
     */
    private _cacheElements;
    /**
     * Attach event listeners to internal elements and component
     * @private
     */
    private _attachEventListeners;
    /**
     * Detach event listeners
     * @private
     */
    private _detachEventListeners;
    /**
     * Handle zoom/pan button clicks
     * @param event - Click event
     * @private
     */
    private _onZoomPan;
    /**
     * Handle ready event from engine
     * @param event - Ready event
     * @private
     */
    private _onReady;
    /**
     * Handle error event from engine
     * @param event - Error event
     * @private
     */
    private _onError;
    /**
     * Handle internal click event from engine
     * @param event - Click event
     * @private
     */
    private _onInternalClick;
    /**
     * Parse and apply colors table from attribute
     * @param colorsTableStr - JSON string of colors table
     * @private
     */
    private _parseAndApplyColorsTable;
    /**
     * Emit a CustomEvent
     * @param type - Event type
     * @param detail - Event detail object
     * @private
     */
    private _emitEvent;
    /**
     * Emit an error event
     * @param error - Error object or message
     * @private
     */
    private _emitError;
    /**
     * Show the loader animation
     */
    showLoader(): void;
    /**
     * Hide the loader animation
     */
    hideLoader(): void;
    /**
     * Load an SVG from a URL
     * @param url - URL of the SVG file
     * @returns {Promise<void>}
     */
    loadURL(url: string): Promise<void>;
    /**
     * Set SVG content directly
     * @param svgContent - SVG markup string
     */
    setSVG(svgContent: string): void;
    /**
     * Set a value for a tag and immediately update the display.
     * Mirrors synopticapi.js setValue().
     * Point key can be a string tag name or a numeric point number.
     * @param tag - Tag name or point number
     * @param value - Value for the tag
     * @param failed - Whether the point is in failed state
     * @param alarmed - Whether the point is alarmed
     * @param description - Optional description
     * @returns True if successful
     */
    setValue(tag: string | number, value: number | boolean | string, failed?: boolean, alarmed?: boolean, description?: string | null): boolean;
    /**
     * Store a value for a tag without triggering a display redraw.
     * Call updateValues() afterwards to flush buffered values.
     * Mirrors synopticapi.js storeValue().
     * Point key can be a string tag name or a numeric point number.
     * @param tag - Tag name or point number
     * @param value - Value for the tag
     * @param failed - Whether the point is in failed state
     * @param alarmed - Whether the point is alarmed
     * @param description - Optional description
     * @returns True (always buffered)
     */
    storeValue(tag: string | number, value: number | boolean | string, failed?: boolean, alarmed?: boolean, description?: string | null): boolean;
    /**
     * Flush all values buffered by storeValue() to the display.
     * Mirrors synopticapi.js updateValues().
     * @param values - Optional additional { tag: value } pairs to include
     * @returns True if successful
     */
    updateValues(values?: Record<string, number | boolean | string>): boolean;
    /**
     * Update values for tags to the component. Work as a promise. Only available for version 2+.
     * Mirrors synopticapi.js refreshDisplay().
     * @param values - values in a object like { "tag1" : 1.0, "tag2": 1.2, "tag3": true }.
     * @returns Promise that resolves after the display refresh is completed.
     */
    refreshDisplay(values?: Record<string, number | boolean | string>): Promise<boolean>;
    /**
     * Set multiple values at once
     * @param values - Object with tag-value pairs
     * @param qualifs - Object with tag-quality pairs (optional)
     */
    setValues(values: Record<string, number | boolean>, qualifs?: Record<string, number | boolean>): void;
    /**
     * Get the current value for a tag or point number.
     * Point key can be a string tag name or a numeric point number.
     * Mirrors synopticapi.js getValue().
     * @param tag - Tag name or point number
     * @returns Current value, or null if not found
     */
    getValue(tag: string | number): number | boolean | string | null;
    /**
     * Get list of all tags
     * @returns Array of tag names
     */
    getTagsList(): string[];
    /**
     * Get list of all tags (alias for getTagsList)
     * @returns Array of tag names
     */
    getTags(): string[];
    /**
     * Clear all tag data and reset state
     * @returns True if successful
     */
    resetData(): boolean;
    /**
     * Zoom to a specific level
     * @param zoomLevel - Zoom level
     * @param target - Target element ID or coordinates
     * @returns True if successful
     */
    zoomTo(zoomLevel: number, target?: string | Object | null): boolean;
    /**
     * Pan the view by specified amounts
     * @param dx - Horizontal pan distance
     * @param dy - Vertical pan distance
     * @returns True if successful
     */
    moveBy(dx: number, dy: number): boolean;
    /**
     * Reset zoom to original viewBox
     * @returns True if successful
     */
    zoomToOriginal(): boolean;
    /**
     * Enable/disable toolbar buttons
     * @param panEnabled - Toolbar options or panEnabled boolean
     * @param zoomEnabled - Enable/disable Zoom tool (classic API)
     * @returns True if successful
     */
    enableTools(panEnabled?: boolean | ToolOptions, zoomEnabled?: boolean): boolean;
    /**
     * Enable/disable mouse interactions
     * @param panEnabled - Mouse options or panEnabled boolean
     * @param zoomEnabled - Enable/disable zoom via mouse (classic API)
     * @returns True if successful
     */
    enableMouse(panEnabled?: boolean | MouseOptions, zoomEnabled?: boolean): boolean;
    /**
     * Configure mouse wheel behavior
     * @param directionBackOut - Mouse wheel options or directionBackOut boolean
     * @param blockEventPropagation - Prevent event bubbling (classic API)
     * @returns True if successful
     */
    setMouseWheel(directionBackOut?: boolean | MouseWheelOptions, blockEventPropagation?: boolean): boolean;
    /**
     * Enable/disable keyboard functions (zoom & pan)
     * @param keyEnabled - Keyboard options or keyEnabled boolean
     * @returns True if successful
     */
    enableKeyboard(keyEnabled?: boolean | KeyboardOptions): boolean;
    /**
     * Enable/disable alarm blinking animation
     * @param enabled - Enable/disable alarm flash
     * @returns True if successful
     */
    enableAlarmFlash(enabled?: boolean): boolean;
    /**
     * Hide the SCADAvis watermark
     * @returns True if successful
     */
    hideWatermark(): boolean;
    /**
     * Update a single color in the color table
     * @param colorNumber - Color index (-1 for background)
     * @param colorCode - CSS color value
     * @returns True if successful
     */
    setColor(colorNumber: number, colorCode: string): boolean;
    /**
     * Update multiple colors in the color table
     * @param colorsTable - Object mapping color indices to color codes
     * @returns True if successful
     */
    setColors(colorsTable: ColorsTable): boolean;
    /**
     * Process OAS API format tags data
     * @param tags - Array of tag objects from OAS API
     * @returns True if successful
     */
    processTagsData(tags: any[]): boolean;
    /**
     * Process Google Sheets format valueRanges data
     * @param valueRanges - Array of valueRange objects
     * @returns True if successful
     */
    processValueRanges(valueRanges: any[]): boolean;
    /**
     * Process raw data object (supports both formats)
     * @param obj - Data object to process
     * @returns True if successful
     */
    processData(obj: any): boolean;
    /**
     * Set the background color
     * @param color - CSS color value
     */
    setBackgroundColor(color: string): void;
    /**
     * Show or hide the toolbar
     * @param show - Whether to show the toolbar
     */
    setToolbarVisible(show: boolean): void;
    /**
     * Show or hide the watermark
     * @param show - Whether to show the watermark
     */
    setWatermarkVisible(show: boolean): void;
    /**
     * Update the status display
     * @param status - Status text
     */
    setStatus(status: string): void;
    /**
     * Update the time display
     * @param time - Time string
     */
    setTime(time: string): void;
    /**
     * Set external libraries for Vega charts
     * @param libs - External libraries { d3, vega, vegaLite, $ }
     */
    set externalLibs(libs: ScadaVisExternalLibs);
    /**
     * Get external libraries reference
     * @returns External libraries
     */
    get externalLibs(): ScadaVisExternalLibs;
    /**
     * Get the current version
     * @returns Version string
     */
    getVersion(): string;
    /**
     * Get the current version
     * @returns Version string
     */
    getComponentVersion(): string;
    /**
     * Check if the component is ready
     * @returns True if ready
     */
    isReady(): boolean;
    /**
     * Get the current component state
     * 0=not loaded, 1=loaded and ready for graphics, 2=SVG graphics processed and ready for data.
     * @returns State value
     */
    getComponentState(): number;
    /**
     * Get internal state for debugging
     * @returns State snapshot
     */
    _getState(): any;
    /**
     * Compatibility method for event binding analogous to the classic iframe API
     * @param eventName - Event name such as "ready", "click", or "error"
     * @param callback - Callback function
     * @returns True if supported event
     */
    on(eventName: string, callback: (event: any, tag?: any) => void): boolean;
}
export { ScadaVis }
export default ScadaVis;

/** Configuration options for the ScadaVis component */
export declare interface ScadaVisConfig {
    colorTable: string[];
    pbiColorTable: string[];
    pbiColors: Record<string, string>;
    [key: string]: any;
}

/** Default configuration for SCADAvis */
export declare interface ScadaVisDefaultConfig {
    svgMaxWidth: number;
    svgMaxHeight: number;
    background: string;
    backgroundSVG: string;
    toolbarColor: string;
    barBreakerSwColor: string;
}

/** Custom event detail for error event */
export declare interface ScadaVisErrorDetail {
    error: string;
}

/** External libraries that can be injected into the component */
export declare interface ScadaVisExternalLibs {
    d3?: any;
    vega?: any;
    vegaLite?: any;
    $?: any;
}

/**
 * Initialization of the web component via promise.
 * @param container - ID of the container element, or a config object
 * @param styleParams - Style string for the web component (width, height)
 * @param svgurl - URL for the SVG file
 * @returns Promise that resolves to the ScadaVis element when ready
 */
export declare function scadavisInit(container?: string | HTMLElement | ScadaVisInitParams, styleParams?: string, svgurl?: string): Promise<ScadaVis>;

/** Init parameters for scadavisInit function */
export declare interface ScadaVisInitParams {
    container?: string | HTMLElement;
    styleParams?: string;
    svgurl?: string;
    colorsTable?: string | ColorsTable;
    iframeparams?: string;
    [key: string]: any;
}

/** Options for creating a ScadaVis component instance */
export declare interface ScadaVisOptions {
    debug?: boolean;
    defaultColors?: string[];
    [key: string]: any;
}

/** Custom event detail for ready event */
export declare interface ScadaVisReadyDetail {
    tagsList: string[];
}

/** Custom event detail for zoomPan event */
export declare interface ScadaVisZoomPanDetail {
    action: number;
}

/** Tags data entry */
export declare interface TagDataEntry {
    path: string;
    value: number | boolean;
    quality: boolean;
    type: 'bool' | 'float';
}

/** Tools enable/disable options */
export declare interface ToolOptions {
    panEnabled?: boolean;
    zoomEnabled?: boolean;
}

/**
 * Version information
 */
export declare const VERSION = "3.0.0";

export { }
