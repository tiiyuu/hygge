// CMS.registerEditorComponent({
//     id: "figure",
//     label: "Figure",
//     fields: [{
//             name: "title",
//             label: "Figure Title",
//             widget: "string"
//         },
//         {
//             name: "src",
//             label: "Figure SRC",
//             widget: "string"
//         },
//     ],
//     pattern: /{{< figure src="([a-zA-Z0-9-_ ]+)" title="([a-zA-Z0-9-_ ]+)" >}}/,
//     fromBlock: function(match) {
//         return {
//             title: match[1],
//             src: match[2],
//         };
//     },
//     toBlock: function(obj) {
//         return `{{< figure src="${obj.src}" title="${obj.title}" >}}`;
//     },
//     toPreview: function(obj) {
//         return `<figure><img src=${obj.src} alt=${obj.title}><figcaption>${obj.title}</figcaption></figure>`;
//     },
// });
// CMS.registerEditorComponent({
//     id: "gist",
//     label: "Gist",
//     fields: [{
//             name: "username",
//             label: "Github Username",
//             widget: "string"
//         },
//         {
//             name: "gid",
//             label: "Gist ID",
//             widget: "string"
//         },
//     ],
//     pattern: /{{< gist ([a-zA-Z0-9]+) ([a-zA-Z0-9]+) >}}/,
//     fromBlock: function(match) {
//         return {
//             username: match[1],
//             gid: match[2],
//         };
//     },
//     toBlock: function(obj) {
//         return `{{< gist ${obj.username} ${obj.gid} >}}`;
//     },
//     toPreview: function(obj) {
//         return `{{< gist ${obj.username} ${obj.gid} >}}`;
//     },
// });

CMS.registerEditorComponent({
    id: "format",
    label: "Text Format",
    fields: [{
            name: "fontfamily",
            label: "Font-Family",
            widget: "string",
            required: false
        },
        {
            name: "fontsize",
            label: "Font-Size",
            widget: "number",
            required: false,
            value_type: "float",
            min: 0.5,
            max: 100.0
        },
        {
            name: "color",
            label: "Font-Color",
            widget: "color",
            enableAlpha: true,
            allowInput: true,
            required: false
        },
        {
            name: "bgcolor",
            label: "Background-Color",
            widget: "color",
            enableAlpha: true,
            allowInput: true,
            required: false
        },
        {
            name: "radius",
            label: "Border-Radius",
            widget: "number",
            required: false,
            value_type: "int",
            default: 0,
            min: 0,
            max: 30
        },
        {
            name: "text",
            label: "Text",
            widget: "text"
        }
    ],
    pattern: /{{< format fontfamily="(.*)" fontsize="(.*)" color="(.*)" bgcolor="(.*)" radius="(.*)" text="(.*)" >}}/,
    fromBlock: function(match) {
        return {
            fontfamily: match[1],
            fontsize: match[2],
            color: match[3],
            bgcolor: match[4],
            radius: match[5],
            text: match[6]
        };
    },
    toBlock: function(obj) {
        return `{{< format fontfamily="${obj.fontfamily}" fontsize="${obj.fontsize}" color="${obj.color}" bgcolor="${obj.bgcolor}" radius="${obj.radius}" text="${obj.text}" >}}`;
    },
    toPreview: function(obj) {
        return `<span style="font-family:${obj.fontfamily}; font-size:${obj.fontsize}px; color: ${obj.color}; background-color:${obj.bgcolor}; border-radius: ${obj.radius}px;">${obj.text}</span>`;
    },
});
// CMS.registerEditorComponent({
//     id: "twitter",
//     label: "Twitter",
//     fields: [{
//         name: "tid",
//         label: "Tweet id",
//         widget: "string"
//     }],
//     pattern: /{{< tweet ([a-zA-Z0-9]+) >}}/,
//     fromBlock: function(match) {
//         return {
//             tid: match[1]
//         };
//     },
//     toBlock: function(obj) {
//         return `{{< tweet ${obj.tid} >}}`;
//     },
//     toPreview: function(obj) {
//         return `{{< tweet ${obj.tid} >}}`;
//     },
// });
// CMS.registerEditorComponent({
//     id: "vimeo",
//     label: "Vimeo",
//     fields: [{
//         name: "shortcode",
//         label: "Vimeo shortcode",
//         widget: "string"
//     }],
//     pattern: /{{< vimeo ([a-zA-Z0-9]+) >}}/,
//     fromBlock: function(match) {
//         return {
//             shortcode: match[1]
//         };
//     },
//     toBlock: function(obj) {
//         return `{{< vimeo ${obj.shortcode} >}}`;
//     },
//     toPreview: function(obj) {
//         return `{{< vimeo ${obj.shortcode} >}}`;
//     },
// });
// CMS.registerEditorComponent({
//     id: "youtube",
//     label: "Youtube",
//     fields: [{
//         name: "id",
//         label: "Youtube Video ID",
//         widget: "string"
//     }],
//     pattern: /{{< youtube ([a-zA-Z0-9]+) >}}/,
//     fromBlock: function(match) {
//         return {
//             id: match[1],
//         };
//     },
//     toBlock: function(obj) {
//         return `{{< youtube ${obj.id} >}}`;
//     },
//     toPreview: function(obj) {
//         return `<img src="http://img.youtube.com/vi/${obj.id}/maxresdefault.jpg" alt="Youtube Video"/>`;
//     },
// });
// CMS.registerEditorComponent({
//     id: "img",
//     label: "Images",
//     fields: [{
//             name: "img_url",
//             label: "image",
//             widget: "image",
//             choose_url: false
//         }
//     ],
//     // 透過regex expression取得shortcodes，要加括號才能將value存起來
//     // match[0]為整段shortcodes, match[1]則為括號裡面的value
//     pattern: /!\[.*\]\((.*)\)/,
//     fromBlock: function(match) {
//         return {
//             img_url: match[1], // 將括號的值存到block的code欄位
//         };
//     },
//     toBlock: function(obj) {
//         return `![](https://xuani-yoga.tk/${obj.img_url})`;
//     },
//     toPreview: function(obj) {
//         return `![](https://xuani-yoga.tk/${obj.img_url})`;
//     },
// });

CMS.registerEditorComponent({
    id: "embed",
    label: "Embed",
    fields: [{
            name: "code",
            label: "Code",
            widget: "text"
        }
    ],
    // 透過regex expression取得shortcodes，要加括號才能將value存起來
    // match[0]為整段shortcodes, match[1]則為括號裡面的value
    pattern: /{{< embed >}}(\n*.*\n*){{< \/embed >}}/,
    fromBlock: function(match) {
        return {
            code: match[1], // 將括號的值存到block的code欄位
        };
    },
    toBlock: function(obj) {
        return `{{< embed >}}\n${obj.code}\n{{< /embed >}}`;
    },
    toPreview: function(obj) {
        return obj.code;
    },
});

// Custom Preview in CMS
// CMS.registerPreviewStyle("/css/style.min.css");
// [To-Do] Add Custom Preview Template