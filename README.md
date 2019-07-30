# Module: MMM-SimpleLogo

The `MMM-SimpleLogo` module is third party modules of the MagicMirror. This module simply displays logo.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:

```javascript
modules: [
    {
        module: 'MMM-SimpleLogo',
        position: 'top_left',    // This can be any of the regions.
        config: {
            // The config property is optional.
            // See 'Configuration options' for more information.
        }
    }
]
```

## Configuration options

The following properties can be configured:

<table width="100%">
	<!-- why, markdown... -->
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>fileUrl</code></td>
			<td>File url.<br>
				<br><b>Possible values:</b> Logo link form internet or path to your local files relative to MagicMirror directory
				<br><b>Default value:</b> <i>'modules/MMM-SimpleLogo/public/logo.png'</i>
			</td>
		</tr>
		<tr>
			<td><code>width</code></td>
			<td>Set width of your logo, height is auto.<br>
				<br><b>Possible values:</b> <code>'300px'</code> or <code>'50%'</code>
				<br><b>Default value:</b> <code>'200px'</code>
			</td>
		</tr>
		<tr>
			<td><code>position</code></td>
			<td>Horizontal position on current container<br>
				<br><b>Possible values:</b> <code>left</code>, <code>center</code>, or <code>right</code>
				<br><b>Default value:</b> <code>left</code>
			</td>
		</tr>
		<tr>
			<td><code>refreshInterval</code></td>
			<td>Refresh/refetch image file between interval. Only use this if your image url return different image after some interval of time, even the <code>fileUrl</code> is not changed. See this case #2, awesome project by @ElYoM <br>
				<br><b>Possible values:</b> <code>1000</code>, <code>2000</code>, or <code>10000</code>
				<br><b>Default value:</b> <code>0</code> (disabled)
			</td>
		</tr>
		<tr>
			<td><code>text</code></td>
			<td>Text above the image.<br>
				<br><b>Possible values:</b> Any text
				<br><b>Default value:</b> <code>Simple Logo</code>
			</td>
		</tr>
	</tbody>
</table>

## Notification Events
The MMM-SimpleLogo module supports the notification event `SIMPLE_LOGO_UPDATE` which allows the configuration to be dynamically modified.  As an example, the MMM-OnScreenMenu module might be used to dynamic adjust the `fileURL` parameter as follows:

    {
        module: "MMM-OnScreenMenu",
        position: "top_left",
        config: {
            menuItems: {
                notify1: {
                    title: "Show Cat",
                    notification: "SIMPLE_LOGO_UPDATE",
                    payload: {
                        fileUrl: "cat.jpg",
                        width: "750px"
                    }
                },
                notify2: {
                    title: "Show Dog",
                    notification: "SIMPLE_LOGO_UPDATE",
                    payload: {
                        fileUrl: "dog.jpg",
                        width: "1050px"
                    }
                }
            }
        }
    }

