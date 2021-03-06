import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

// custom hook - arrange code language by file type
function useCodeLanguage( type )
{
    switch ( type ) 
    {
        case 'html':
            return 'xml';

        case 'php':
            return 'javascript';

        case 'js':
            return 'javascript';

        case 'json':
            return 'javascript';

        case 'lock':
            return 'javascript';

        case 'scss':
            return 'css';
        
        default:
            return type;
    }
}

export default useCodeLanguage;