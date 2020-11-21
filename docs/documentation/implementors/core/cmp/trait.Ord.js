(function() {var implementors = {};
implementors["byteorder"] = [{"text":"impl Ord for BigEndian","synthetic":false,"types":[]},{"text":"impl Ord for LittleEndian","synthetic":false,"types":[]}];
implementors["bytes"] = [{"text":"impl Ord for Bytes","synthetic":false,"types":[]},{"text":"impl Ord for BytesMut","synthetic":false,"types":[]}];
implementors["chrono"] = [{"text":"impl Ord for NaiveDate","synthetic":false,"types":[]},{"text":"impl Ord for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl Ord for IsoWeek","synthetic":false,"types":[]},{"text":"impl Ord for NaiveTime","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Ord for Date&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Ord for DateTime&lt;Tz&gt;","synthetic":false,"types":[]}];
implementors["generic_array"] = [{"text":"impl&lt;T:&nbsp;Ord, N&gt; Ord for GenericArray&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["headers"] = [{"text":"impl Ord for AccessControlMaxAge","synthetic":false,"types":[]},{"text":"impl Ord for Date","synthetic":false,"types":[]},{"text":"impl Ord for Expires","synthetic":false,"types":[]},{"text":"impl Ord for IfModifiedSince","synthetic":false,"types":[]},{"text":"impl Ord for IfUnmodifiedSince","synthetic":false,"types":[]},{"text":"impl Ord for LastModified","synthetic":false,"types":[]},{"text":"impl Ord for Server","synthetic":false,"types":[]},{"text":"impl Ord for UserAgent","synthetic":false,"types":[]}];
implementors["http"] = [{"text":"impl Ord for HeaderValue","synthetic":false,"types":[]},{"text":"impl Ord for StatusCode","synthetic":false,"types":[]},{"text":"impl Ord for Version","synthetic":false,"types":[]}];
implementors["httpdate"] = [{"text":"impl Ord for HttpDate","synthetic":false,"types":[]}];
implementors["log"] = [{"text":"impl Ord for Level","synthetic":false,"types":[]},{"text":"impl Ord for LevelFilter","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Ord for Metadata&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Ord for MetadataBuilder&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["mime"] = [{"text":"impl&lt;'a&gt; Ord for Name&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Ord for Mime","synthetic":false,"types":[]}];
implementors["mio"] = [{"text":"impl Ord for PollOpt","synthetic":false,"types":[]},{"text":"impl Ord for Ready","synthetic":false,"types":[]},{"text":"impl Ord for UnixReady","synthetic":false,"types":[]},{"text":"impl Ord for Token","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl Ord for Ident","synthetic":false,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl Ord for Span","synthetic":false,"types":[]},{"text":"impl Ord for Position","synthetic":false,"types":[]},{"text":"impl Ord for Literal","synthetic":false,"types":[]},{"text":"impl Ord for ClassUnicodeRange","synthetic":false,"types":[]},{"text":"impl Ord for ClassBytesRange","synthetic":false,"types":[]},{"text":"impl Ord for Utf8Sequence","synthetic":false,"types":[]},{"text":"impl Ord for Utf8Range","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; Ord for SmallVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: Ord,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl Ord for Lifetime","synthetic":false,"types":[]}];
implementors["time"] = [{"text":"impl Ord for Duration","synthetic":false,"types":[]},{"text":"impl Ord for Timespec","synthetic":false,"types":[]},{"text":"impl Ord for SteadyTime","synthetic":false,"types":[]},{"text":"impl Ord for Tm","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; Ord for ArrayVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; Ord for TinyVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: Ord,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["tokio"] = [{"text":"impl Ord for Instant","synthetic":false,"types":[]}];
implementors["tokio_util"] = [{"text":"impl Ord for BytesCodec","synthetic":false,"types":[]},{"text":"impl Ord for LinesCodec","synthetic":false,"types":[]}];
implementors["tracing_core"] = [{"text":"impl Ord for Level","synthetic":false,"types":[]},{"text":"impl Ord for LevelFilter","synthetic":false,"types":[]}];
implementors["typenum"] = [{"text":"impl Ord for B0","synthetic":false,"types":[]},{"text":"impl Ord for B1","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Ord + Unsigned + NonZero&gt; Ord for PInt&lt;U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Ord + Unsigned + NonZero&gt; Ord for NInt&lt;U&gt;","synthetic":false,"types":[]},{"text":"impl Ord for Z0","synthetic":false,"types":[]},{"text":"impl Ord for UTerm","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Ord, B:&nbsp;Ord&gt; Ord for UInt&lt;U, B&gt;","synthetic":false,"types":[]},{"text":"impl Ord for ATerm","synthetic":false,"types":[]},{"text":"impl&lt;V:&nbsp;Ord, A:&nbsp;Ord&gt; Ord for TArr&lt;V, A&gt;","synthetic":false,"types":[]},{"text":"impl Ord for Greater","synthetic":false,"types":[]},{"text":"impl Ord for Less","synthetic":false,"types":[]},{"text":"impl Ord for Equal","synthetic":false,"types":[]}];
implementors["unicase"] = [{"text":"impl&lt;T:&nbsp;AsRef&lt;str&gt;&gt; Ord for Ascii&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;AsRef&lt;str&gt;&gt; Ord for UniCase&lt;T&gt;","synthetic":false,"types":[]}];
implementors["unicode_bidi"] = [{"text":"impl Ord for Level","synthetic":false,"types":[]}];
implementors["url"] = [{"text":"impl&lt;S:&nbsp;Ord&gt; Ord for Host&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl Ord for Url","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()