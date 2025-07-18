module.exports = {

"[project]/.next-internal/server/app/api/upload/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/lib/excel.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addFieldRecord": (()=>addFieldRecord),
    "createExcelBuffer": (()=>createExcelBuffer),
    "createSampleUsersFile": (()=>createSampleUsersFile),
    "formatRecordForExcel": (()=>formatRecordForExcel),
    "generateRecordId": (()=>generateRecordId),
    "getSampleFieldRecords": (()=>getSampleFieldRecords),
    "readExcelFile": (()=>readExcelFile),
    "validateUser": (()=>validateUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-route] (ecmascript)");
;
const createSampleUsersFile = ()=>{
    return [
        {
            username: 'admin',
            password: 'admin123',
            name: 'Administrator',
            role: 'admin'
        },
        {
            username: 'field1',
            password: 'field123',
            name: 'Field Worker 1',
            role: 'field'
        },
        {
            username: 'field2',
            password: 'field456',
            name: 'Field Worker 2',
            role: 'field'
        },
        {
            username: 'demo',
            password: 'demo',
            name: 'Demo User',
            role: 'demo'
        }
    ];
};
const readExcelFile = (buffer)=>{
    try {
        const workbook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["read"])(buffer, {
            type: 'array'
        });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(worksheet);
    } catch (error) {
        console.error('Error reading Excel file:', error);
        return [];
    }
};
const createExcelBuffer = (data, sheetName = 'Sheet1')=>{
    try {
        const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(data);
        const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["utils"].book_new();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(workbook, worksheet, sheetName);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["write"])(workbook, {
            bookType: 'xlsx',
            type: 'array'
        });
    } catch (error) {
        console.error('Error creating Excel buffer:', error);
        throw new Error('Failed to create Excel file');
    }
};
const validateUser = (users, username, password)=>{
    const user = users.find((u)=>u.username === username && u.password === password);
    return user || null;
};
const addFieldRecord = (existingRecords, newRecord)=>{
    return [
        ...existingRecords,
        newRecord
    ];
};
const generateRecordId = ()=>{
    return `VISIT_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};
const formatRecordForExcel = (record)=>{
    return {
        'Record ID': record.id,
        'Timestamp': record.timestamp,
        'Customer Name': record.customerName,
        'Phone Number': record.phoneNumber,
        'Business Name': record.businessName,
        'Location': record.location,
        'Address': record.address,
        'Latitude': record.latitude,
        'Longitude': record.longitude,
        'User ID': record.userId,
        'Photo': record.photoBase64 ? 'Photo Attached' : 'No Photo'
    };
};
const getSampleFieldRecords = ()=>{
    return [
        {
            id: generateRecordId(),
            timestamp: new Date().toISOString(),
            customerName: 'John Doe',
            phoneNumber: '+1234567890',
            location: 'Downtown Office',
            businessName: 'Tech Solutions Inc',
            latitude: 40.7128,
            longitude: -74.0060,
            address: '123 Main St, New York, NY',
            photoBase64: '',
            userId: 'demo'
        }
    ];
};
}}),
"[project]/src/app/api/upload/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DELETE": (()=>DELETE),
    "GET": (()=>GET),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$excel$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/excel.ts [app-route] (ecmascript)");
;
;
// In-memory storage for demo purposes
// In a real application, you would store this in a database or file system
let fieldRecords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$excel$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSampleFieldRecords"])();
async function POST(request) {
    try {
        const recordData = await request.json();
        // Validate required fields
        if (!recordData.customerName?.trim()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Customer name is required'
            }, {
                status: 400
            });
        }
        if (!recordData.photoBase64) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Photo is required'
            }, {
                status: 400
            });
        }
        if (!recordData.latitude || !recordData.longitude) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Location data is required'
            }, {
                status: 400
            });
        }
        // Validate data types
        if (typeof recordData.latitude !== 'number' || typeof recordData.longitude !== 'number') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Invalid location coordinates'
            }, {
                status: 400
            });
        }
        // Add timestamp if not provided
        if (!recordData.timestamp) {
            recordData.timestamp = new Date().toISOString();
        }
        // Add the record to our in-memory storage
        fieldRecords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$excel$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addFieldRecord"])(fieldRecords, recordData);
        console.log(`New field record added: ${recordData.id} for customer: ${recordData.customerName}`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'Record saved successfully',
            recordId: recordData.id,
            totalRecords: fieldRecords.length
        });
    } catch (error) {
        console.error('Upload API error:', error);
        // Handle JSON parsing errors
        if (error instanceof SyntaxError) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Invalid JSON data'
            }, {
                status: 400
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');
        const limit = parseInt(searchParams.get('limit') || '50');
        const offset = parseInt(searchParams.get('offset') || '0');
        let filteredRecords = fieldRecords;
        // Filter by user if specified
        if (userId) {
            filteredRecords = fieldRecords.filter((record)=>record.userId === userId);
        }
        // Apply pagination
        const paginatedRecords = filteredRecords.slice(offset, offset + limit);
        // Format records for response (exclude large photo data for list view)
        const recordsForResponse = paginatedRecords.map((record)=>({
                ...record,
                photoBase64: record.photoBase64 ? 'Photo Available' : 'No Photo',
                photoSize: record.photoBase64 ? `${Math.round(record.photoBase64.length / 1024)} KB` : '0 KB'
            }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            records: recordsForResponse,
            totalRecords: filteredRecords.length,
            pagination: {
                limit,
                offset,
                hasMore: offset + limit < filteredRecords.length
            }
        });
    } catch (error) {
        console.error('Get records API error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const recordId = searchParams.get('id');
        if (!recordId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Record ID is required'
            }, {
                status: 400
            });
        }
        const initialLength = fieldRecords.length;
        fieldRecords = fieldRecords.filter((record)=>record.id !== recordId);
        if (fieldRecords.length === initialLength) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Record not found'
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'Record deleted successfully',
            deletedRecordId: recordId,
            remainingRecords: fieldRecords.length
        });
    } catch (error) {
        console.error('Delete record API error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__55bbe5e3._.js.map