# Module: MMM-SimpleLogo
The `MMM-SimpleLogo` module is third party modules of the MagicMirror.
This module simply displays logo.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-SimpleLogo',
		position: 'top_left',	// This can be any of the regions.
		config: {
			// The config property is optional.
			// See 'Configuration options' for more information.
		}
	}
]
````

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
	</tbody>
</table>
