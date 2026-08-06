import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./react-B7Te67-h.js";import{t as n}from"./jsx-runtime-DqZldVDK.js";import{a as r,o as i}from"./iframe-B7K0Ky36.js";function a({className:e,...t}){return(0,p.jsx)(`div`,{"data-slot":`table-container`,className:`relative w-full overflow-x-auto`,children:(0,p.jsx)(`table`,{"data-slot":`table`,className:r(`w-full caption-bottom text-sm`,e),...t})})}function o({className:e,...t}){return(0,p.jsx)(`thead`,{"data-slot":`table-header`,className:r(`[&_tr]:border-b`,e),...t})}function s({className:e,...t}){return(0,p.jsx)(`tbody`,{"data-slot":`table-body`,className:r(`[&_tr:last-child]:border-0`,e),...t})}function c({className:e,...t}){return(0,p.jsx)(`tfoot`,{"data-slot":`table-footer`,className:r(`border-t bg-muted/50 font-medium [&>tr]:last:border-b-0`,e),...t})}function l({className:e,...t}){return(0,p.jsx)(`tr`,{"data-slot":`table-row`,className:r(`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted`,e),...t})}function u({className:e,...t}){return(0,p.jsx)(`th`,{"data-slot":`table-head`,className:r(`h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0`,e),...t})}function d({className:e,...t}){return(0,p.jsx)(`td`,{"data-slot":`table-cell`,className:r(`p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0`,e),...t})}function f({className:e,...t}){return(0,p.jsx)(`caption`,{"data-slot":`table-caption`,className:r(`mt-4 text-sm text-muted-foreground`,e),...t})}var p,m=e((()=>{t(),i(),p=n(),a.__docgenInfo={description:``,methods:[],displayName:`Table`},o.__docgenInfo={description:``,methods:[],displayName:`TableHeader`},s.__docgenInfo={description:``,methods:[],displayName:`TableBody`},c.__docgenInfo={description:``,methods:[],displayName:`TableFooter`},u.__docgenInfo={description:``,methods:[],displayName:`TableHead`},l.__docgenInfo={description:``,methods:[],displayName:`TableRow`},d.__docgenInfo={description:``,methods:[],displayName:`TableCell`},f.__docgenInfo={description:``,methods:[],displayName:`TableCaption`}})),h,g,_,v,y,b;e((()=>{m(),h=n(),g={title:`UI/Table`,component:a,tags:[`autodocs`]},_=[{invoice:`INV001`,status:`Paid`,method:`Credit Card`,amount:`$250.00`},{invoice:`INV002`,status:`Pending`,method:`PayPal`,amount:`$150.00`},{invoice:`INV003`,status:`Unpaid`,method:`Bank Transfer`,amount:`$350.00`},{invoice:`INV004`,status:`Paid`,method:`Credit Card`,amount:`$450.00`},{invoice:`INV005`,status:`Paid`,method:`PayPal`,amount:`$550.00`}],v={render:()=>(0,h.jsxs)(a,{children:[(0,h.jsx)(f,{children:`A list of your recent invoices.`}),(0,h.jsx)(o,{children:(0,h.jsxs)(l,{children:[(0,h.jsx)(u,{className:`w-[100px]`,children:`Invoice`}),(0,h.jsx)(u,{children:`Status`}),(0,h.jsx)(u,{children:`Method`}),(0,h.jsx)(u,{className:`text-right`,children:`Amount`})]})}),(0,h.jsx)(s,{children:_.map(e=>(0,h.jsxs)(l,{children:[(0,h.jsx)(d,{className:`font-medium`,children:e.invoice}),(0,h.jsx)(d,{children:e.status}),(0,h.jsx)(d,{children:e.method}),(0,h.jsx)(d,{className:`text-right`,children:e.amount})]},e.invoice))}),(0,h.jsx)(c,{children:(0,h.jsxs)(l,{children:[(0,h.jsx)(d,{colSpan:3,children:`Total`}),(0,h.jsx)(d,{className:`text-right`,children:`$1,750.00`})]})})]})},y={render:()=>(0,h.jsxs)(a,{children:[(0,h.jsx)(o,{children:(0,h.jsxs)(l,{children:[(0,h.jsx)(u,{children:`Name`}),(0,h.jsx)(u,{children:`Email`}),(0,h.jsx)(u,{children:`Role`})]})}),(0,h.jsxs)(s,{children:[(0,h.jsxs)(l,{children:[(0,h.jsx)(d,{className:`font-medium`,children:`Alice Johnson`}),(0,h.jsx)(d,{children:`alice@example.com`}),(0,h.jsx)(d,{children:`Admin`})]}),(0,h.jsxs)(l,{children:[(0,h.jsx)(d,{className:`font-medium`,children:`Bob Smith`}),(0,h.jsx)(d,{children:`bob@example.com`}),(0,h.jsx)(d,{children:`Editor`})]}),(0,h.jsxs)(l,{children:[(0,h.jsx)(d,{className:`font-medium`,children:`Charlie Brown`}),(0,h.jsx)(d,{children:`charlie@example.com`}),(0,h.jsx)(d,{children:`Viewer`})]}),(0,h.jsxs)(l,{children:[(0,h.jsx)(d,{className:`font-medium`,children:`Diana Prince`}),(0,h.jsx)(d,{children:`diana@example.com`}),(0,h.jsx)(d,{children:`Editor`})]}),(0,h.jsxs)(l,{children:[(0,h.jsx)(d,{className:`font-medium`,children:`Eve Davis`}),(0,h.jsx)(d,{children:`eve@example.com`}),(0,h.jsx)(d,{children:`Viewer`})]})]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map(invoice => <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.status}</TableCell>
                        <TableCell>{invoice.method}</TableCell>
                        <TableCell className="text-right">{invoice.amount}</TableCell>
                    </TableRow>)}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$1,750.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">Alice Johnson</TableCell>
                    <TableCell>alice@example.com</TableCell>
                    <TableCell>Admin</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">Bob Smith</TableCell>
                    <TableCell>bob@example.com</TableCell>
                    <TableCell>Editor</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">Charlie Brown</TableCell>
                    <TableCell>charlie@example.com</TableCell>
                    <TableCell>Viewer</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">Diana Prince</TableCell>
                    <TableCell>diana@example.com</TableCell>
                    <TableCell>Editor</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">Eve Davis</TableCell>
                    <TableCell>eve@example.com</TableCell>
                    <TableCell>Viewer</TableCell>
                </TableRow>
            </TableBody>
        </Table>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Simple`]}))();export{v as Default,y as Simple,b as __namedExportsOrder,g as default};